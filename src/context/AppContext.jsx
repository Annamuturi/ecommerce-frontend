import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = import.meta.env.VITE_CURRENCY;


    const navigate = useNavigate();// Initializes the map function from react-router-dom to allow programmatic navigation
    const [user, setUser] = useState(null)// Manages the current logged-in user's data
    const [isSeller, setIsSeller] = useState(false)// a boolean state indicating if the current user has seller privileges
    const [showUserLogin, setShowUserLogin] = useState(false)// controls the visibility of a user login interface
    const [products, setProducts] = useState([])// stores the list of all available product

    const [cartItems, setCartItems] = useState({})// Manages the items in the user's shopping cart
    const [searchQuery, setSearchQuery] = useState("")

    // fetch seller status
    const fetchSeller = async ()=> {
        try {
            const {data} = await axios.get('/api/seller/is-auth')
            if(data.success){
                setIsSeller(true)
            } else {
                setIsSeller(false)
            }
        } catch (error) {
            setIsSeller(false)
        }
    }

    // Fetch User Auth Status , User Data and Cart Items
    const fetchUser = async ()=>{
        try {
            const  {data}  = await axios.get('/api/user/is-auth');
            if (data.success && data.user) {
                setUser(data.user);
                setCartItems(data.user.cartItems)
                console.log("USer fetched on refresh:",data.user)
            } else {
                setUser(null);
                setCartItems({});
                console.log(" User not authorized or session expired");
            }
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            toast.error("Session expired, Please login again")
            setCartItems({});
            setUser(null)
        }
    }


    // fetch All Product

    const fetchProducts = async ()=>{
        try {
            const { data } = await axios.get('/api/product/list')
            if(data.success){
                setProducts(data.products)
                console.log("Products fetched:", data.products);
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Add Product to cart

    const addToCart = (itemId)=>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("added to Cart")
    }

    // update cart Item quantity
    const updateCartItem = (itemId, quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")
    }

    //Remove product from Cart
    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed from cart")
        setCartItems(cartData)
    }

    // Get cart item Count
    const getCartCount = ()=>{
        let totalCount = 0;
        for(const item in cartItems){
            totalCount += cartItems[item];
        }
        return totalCount
    }

    // Get Cart Total Amount
    const getCartAmount = () =>{
        let totalAmount = 0;
        for (const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            if(cartItems[items] > 0){
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    useEffect(()=>{
        fetchUser()
        fetchSeller()
        fetchProducts()
    },[])

    // Update Database Cart Items
    useEffect(()=>{
         if (!user || !cartItems || cartItems.length === 0) return;

    const delayDebounce = setTimeout(async () => {
      try {
        const { data } = await axios.post("/api/cart/update", {
          user: user._id,
          cartItems,
        });
        console.log("Cart update response:", data);

        if (!data.success) {
          toast.error(data.message || "Cart update failed");
        } else {
          console.log("✅ Cart updated:", data);
        }
      } catch (error) {
        toast.error(error.message || "Failed to update cart");
      }
    }, 800); // 800ms debounce

    return () => clearTimeout(delayDebounce);
  }, [user, cartItems]);

    const value = {navigate, user, setUser, setIsSeller, isSeller, 
        showUserLogin, setShowUserLogin, products, currency, addToCart,
         updateCartItem, removeFromCart, cartItems, searchQuery, setSearchQuery,
         getCartAmount, getCartCount, axios, fetchProducts
    }

    return <AppContext.Provider value={value}>
        {children}
        
    </AppContext.Provider>
}

export const useAppContext = () =>{
    return useContext(AppContext)
}