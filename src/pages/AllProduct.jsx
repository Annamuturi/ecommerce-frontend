import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const AllProduct = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    console.log("Products in AllProduct component:", products);
    if (searchQuery.length > 0) {
      setFilteredProduct(
        products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProduct(products);
    }
  }, [products, searchQuery]);

  console.log("Products from context:", products);
  console.log("Filtered products:", filteredProduct);

  if (!products || products.length === 0) {
    return (
      <div className='mt-16 text-center text-gray-500'>
         Loading Products...
      </div>
    )
  }

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filteredProduct.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">
            No products found.
          </p>
        ) : (
          filteredProduct
            .filter((p) => p.inStock)
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
        )}
      </div>
    </div>
  );
};

export default AllProduct;
