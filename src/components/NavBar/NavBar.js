import "./NavBar.scss";
import { links } from "../../utils/NavLust_and_API_url";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useCartContex } from "../../state/contex/CartContex";
// import "./ZZZZ-logo-Ai.png";
import { useState } from "react";
const NavBar = () => {
  const { total_items } = useCartContex();
  const [bur_active, setbur_active] = useState(false);
  return (
    <>
      <header className="nav_heder">
        <div className="con">
          <div className="heder_contenar">
            <div className="hedar_logo_div">
              {/* <img src="https://i.ibb.co/jMYdxwS/ZZZZ-logo-Ai.png" alt="logo" /> */}
              <h1 className="logo">zayed</h1>
            </div>
            <nav className="nav">
              <li className="cart moba">
                <Link to={"/cart"}>
                  <div className="cart_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="currentColor"
                      className="bi bi-cart2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                  </div>
                  <p className="cart_icon_amount">{total_items}</p>
                </Link>
              </li>
              <div
                className="nav_burger"
                onClick={() => setbur_active(!bur_active)}
              >
                <span className="burger burone"></span>
                <span className="burger burtow"></span>
                <span className="burger burthree"></span>
              </div>

              <ul className={bur_active ? "nav_ul active" : "nav_ul"}>
                <div
                  className="cross__for__mobile"
                  onClick={() => setbur_active(false)}
                >
                  <ImCross />
                </div>

                {links.map((link) => {
                  return (
                    <li className="nav_li" key={link.id}>
                      <Link to={link.url}>{link.text}</Link>
                    </li>
                  );
                })}

                <li className="cart desx">
                  <Link to={"/cart"}>
                    <div className="cart_svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="currentColor"
                        className="bi bi-cart2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                      </svg>
                    </div>
                    <p className="cart_icon_amount">{total_items}</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
