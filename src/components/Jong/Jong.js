import React from "react";
import "./Jong.scss";
const Jong = () => {
  return (
    <div className="Jong">
      <div className="con">
        <div className="Jong__con">
          <div className="Jong__left">
            <h2 className="Jong__title">Join our newsletter and get 50% off</h2>
            <p className="Jong__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              voluptas dolor iure nobis vel dolore libero autem doloribus
              aperiam.{" "}
            </p>
          </div>
          <div className="Jong__right">
            <input type="text" className="Jong__inp" placeholder="email" />
            <button className="Jong__btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jong;
