// import React from 'react';
import '../styles/Products.css';

const Products = () => {
    return (
        <>
        <title>Products - Telvion Systems</title>
        <meta name="description" content="Products" />
        <div className="page-wrapper">
            <div className="page-container">
                <h1>Our Products</h1>
                <div className="product-list">
                    <div className="Product">
                        <div className="ProductInformation">
                            <div className="ProductImage">
                            <img src="/Discord_White.webp" alt="product" />
                            </div>
                            <div className="ProductTitleGroup">
                            <p className="ProductTitle">Example Product</p>
                            <p className="ProductPrice">$399.99</p>
                            </div>
                        </div>
                        <div className="ProductBadges">
                            <span className="ProductBadge">Bot Service</span>
                            <span className="ProductBadge">24/7 Support</span>
                            <span className="ProductBadge">Lifetime Updates</span>
                        </div>
                        <p className="ProductDescription">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                            consectetur quisque faucibus ex sapien vitae pellentesque.
                        </p>
                        <div className="ProductDivider" />
                        <div className="ProductButtons">
                            <button className="FeaturesButton">View additional features</button>
                            <button className="BuyButton">
                                <i className="fa fa-shopping-basket"></i>
                            </button>
                        </div>
                    </div>
                    <div className="Product">
                        <div className="ProductInformation">
                            <div className="ProductImage">
                            <img src="/react.svg" alt="product" />
                            </div>
                            <div className="ProductTitleGroup">
                            <p className="ProductTitle">Example Product</p>
                            <p className="ProductPrice">$399.99 / month</p>
                            </div>
                        </div>
                        <div className="ProductBadges">
                            <span className="ProductBadge">Website Service</span>
                            <span className="ProductBadge">24/7 Support</span>
                            <span className="ProductBadge">Lifetime Updates</span>
                        </div>
                        <p className="ProductDescription">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                            consectetur quisque faucibus ex sapien vitae pellentesque.
                        </p>
                        <div className="ProductDivider" />
                        <div className="ProductButtons">
                            <button className="FeaturesButton">View additional features</button>
                            <button className="BuyButton">
                                <i className="fa fa-shopping-basket"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Products;