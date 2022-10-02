import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="content">
                <h5 className='title1'>summer 2020</h5>
                <h1 className='title2'>new collection</h1>
                <h4 className='description'>We know how large objects will act, but things on a small scale.</h4>

                <Link to="/shop">
                    <button className='shop-button'>shop now</button>
                </Link>
            </div>
            
            <div className="banner">
                <img src="./banner.png" alt="banner" />
            </div>
        </div>
    )
}

export default Banner;
