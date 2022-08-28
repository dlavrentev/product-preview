import React from "react";
import "./../Components/Component.scss";
import ImgMobile from './../images/image-product-mobile.jpg'

const Component = () => {
  return <div className="container">
    <div className="container_image">
      <img src={ImgMobile} alt="parfume" />
    </div>
    <div className="container_info">
      
    </div>
  </div>;
};

export default Component;
