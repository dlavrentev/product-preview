import React from "react";
import "./../Components/_Component.scss";
import ImgMobile from "./../images/image-product-mobile.jpg";
import Cart from "./../images/icon-cart.svg";

const Component = () => {
  return (
    <div className="container">
      <img src={ImgMobile} alt="parfume" />
      <div className="container_info">
        <p>PERFUME</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price">
          <h1>$149.99</h1>
          <p>$169.99</p>
        </div>
        <button>
          <img src={Cart} alt="cart" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Component;
