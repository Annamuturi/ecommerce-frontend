import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_iamge from "./add_address_image.svg";
import cockTail from '../images/cocktaildress.jpg'
import lacedress from '../images/lacedress.jpg'
import silkdress from '../images/silkddress.jpg'
import partydress from '../images/partydress.jpg'
import Tealengthdress from '../images/Tealengthdress.jpg'
import formaldress from '../images/formaldress.jpg'
import eveningwear from '../images/eveningwear.jpg'
import jumpsuit from '../images/jumpsuit.png'
import ankara from '../images/ankara.png'

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  box_icon,
};

export const categories = [
  
  {
      text: "cocktail dress",
      path: "cocktaildresses",
      image: cockTail,
      bgColor: "#FEF6DA"
    },
    {
        text: "laceddress",
        path: "laceddress",
        image: lacedress,
        bgColor: "#FEF6DA"
      },
        {
        text: "silkdress",
        path: "silkdress",
        image: silkdress,
        bgColor: "#FEF6DA"
      },
      {
          text: "partydress",
          path: "partydress",
          image: partydress,
          bgColor: "#FEF6DA"
        },
          {
          text: "formaldress",
          path: "formaldress",
          image: formaldress,
          bgColor: "#FEF6DA"
        },
          {
          text: "Tealengthdress",
          path: "Tealengthdress",
          image: Tealengthdress,
          bgColor: "#FEF6DA"
        },
        {
            text: "eveningwear",
            path: "eveningwear",
            image: eveningwear,
            bgColor: "#FEF6DA"
          },
          {
              text: "jumsuit",
              path: "jumsuit",
              image: jumpsuit,
              bgColor: "#FEF6DA"
            },
            {
              text: "ankara",
              path: "anakara",
              image: ankara,
              bgColor: "#FEF6DA"
            },
  
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Clothes delivered in under 30 minutes.",
  },
  
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Where elegance meets everyday affordability.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];

export const dummyProducts = [
  
  {
    _id: "dr001",
    name: "Elegant Satin Cocktail Dress",
    category: "cocktail-dresses",
    price: 6500,
    offerPrice: 5800,
    image: [cockTail],
    description: [
      "Smooth satin finish",
      "Flattering body-hugging fit",
      "Perfect for evening events",
      "Available in multiple sizes",
    ],
    inStock: true,
  },
  {
    _id: "dr002",
    name: "Luxury Lace Evening Dress",
    category: "lace-dresses",
    price: 7200,
    offerPrice: 6800,
    image: [lacedress],
    description: [
      "Premium lace detailing",
      "Elegant long silhouette",
      "Ideal for formal occasions",
    ],
    inStock: true,
  },
  {
    _id: "dr003",
    name: "Classic Silk Formal Dress",
    category: "silk-dresses",
    price: 8500,
    offerPrice: 7900,
    image: [silkdress],
    description: [
      "100% premium silk fabric",
      "Luxury smooth texture",
      "Perfect executive look",
    ],
    inStock: true,
  },
  {
    _id: "dr004",
    name: "Glam Party Bodycon Dress",
    category: "party-dresses",
    price: 5500,
    offerPrice: 4999,
    image: [partydress],
    description: [
      "Stretchy bodycon fit",
      "Perfect for birthdays & nights out",
      "Comfortable and stylish",
    ],
    inStock: true,
  },

];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];