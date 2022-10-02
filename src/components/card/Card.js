import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyCartContext from "../../context/Cartcontext";
import './Card.css';

const Card = () => {
    const {increment, setIncrement} = useContext(MyCartContext);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
        .then(response => response.json())
        .then(result => setProduct(Object.values(result)))
    }, [])

    return (
        <div className="product-container">
            <h3 className="product-header">Products</h3>
            <div className="card-container">
                {
                    product?.map((item) => {
                        return (
                            <div className="card" key={item.id}>
                                <img className="product-image" src={item.productImage} alt="product" />

                                <div className="product-details">
                                    <p className="product-title">{item.productName}</p>

                                    <div className="product-center">
                                        <div className="product-left">
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                                            </svg>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                                            </svg>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                                            </svg>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                                            </svg>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                                            </svg>
                                        </div>

                                        <div className="product-right">
                                            <p className="price"><span className="oldprice">{item.oldPrice}</span>/-</p>
                                            <p><span className="newprice">{item.newPrice}</span></p>
                                        </div>
                                    </div>

                                    <Link to="/cart">
                                        <button className="cart-button" onClick={() => setIncrement(increment + 1)}>add to cart</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>  
    )
}

export default Card;
