import React from "react";
import { BsList, BsFillGridFill } from "react-icons/bs";
import { useFilterContex } from "../../state/contex/FilterContex";
import "./Short.scss";

const Short = () => {
  const { short, set_list, set_grid, updeat_short } = useFilterContex();
  return (
    <div className="Short">
      <div className="Short__gird__list">
        <BsFillGridFill onClick={set_grid} />
        <BsList onClick={set_list} />
      </div>

      <div className="Short__Short">
        <span className="short_apn">short by</span>
        <select
          name="short"
          value={short}
          onChange={updeat_short}
          className="short_se"
        >
          <option className="short_opt" value="a_to_z">
            formate (Z-A)
          </option>
          <option className="short_opt" value="z_to_a">
            formate (A-Z)
          </option>
          <option className="short_opt" value="price_lTH">
            price (lowest to height)
          </option>
          <option className="short_opt" value="price_hTl">
            price (height to lowest)
          </option>
        </select>
      </div>
    </div>
  );
};

export default Short;
