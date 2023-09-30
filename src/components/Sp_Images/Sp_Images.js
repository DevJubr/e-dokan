import React, { useState } from "react";
import "./Sp_Images.scss";
const Sp_Images = ({ img = [{ url: "" }] }) => {
  // console.log(img);
  const [main, setmain] = useState(img[0]);

  return (
    <div className="imgwap">
      <img src={main.url} alt="git" className="img_big" />
      <div className="child_img">
        {img.map((im, i) => {
          return (
            <img
              className="img_sml"
              key={i}
              src={im.url}
              alt="ch"
              onClick={() => setmain(img[i])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sp_Images;
