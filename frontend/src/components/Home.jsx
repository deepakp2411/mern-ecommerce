import React from "react";
import { productsApi, useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import '../styles/home.css'
import { addToCart } from "../features/cartSlice";
const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch()

  // add to cart
  const handleAddToCart = (product) => {

    dispatch(addToCart(product))

  }
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured </p>
      ) : (
        <>
          {" "}
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (<div key={product.id} className="product">
              <h3>{productsApi.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">${product.price}</span>
              </div>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
