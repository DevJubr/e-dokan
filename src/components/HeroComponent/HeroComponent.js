import { Link } from "react-router-dom";
import GTP from "../GTP/GTP";
import "./HeroComponent.scss";

const HeroComponent = () => {
  return (
    <>
      <section className="Hero">
        <div className="con">
          <div className="hero__con">
            <div className="hero__con__text_div">
              <h1 className="hero__con__h1">Design Your Comfort Zone</h1>
              <p className="hero__con__pera">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                voluptates commodi dolores magni qui excepturi maiores sed
                veniam harum sunt?
              </p>
              <GTP text={"shop now"} loc={"products"} />
            </div>
            <div className="hero__con__right">
              <div className="hero__con__img_div">
                <img src="https://i.ibb.co/G7fp23Y/heroImg.webp" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
