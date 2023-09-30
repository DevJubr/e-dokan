import React from "react";
import { getUniqValu } from "../../utils/helper";
import { useFilterContex } from "../../state/contex/FilterContex";
import "./FilterCompo.scss";
const FilterCompo = () => {
  const {
    filter_all_products,
    updeatFilter,
    filters: {
      search_text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
  } = useFilterContex();
  const categorys = getUniqValu(filter_all_products, "category");
  const companys = getUniqValu(filter_all_products, "company");
  const colors = getUniqValu(filter_all_products, "colors");
  return (
    <article className="FilterCompo">
      <form className="FilterCompo__form" onSubmit={(e) => e.preventDefault()}>
        <div className="FilterCompo__section__searce">
          <input
            type="search"
            className="search_inp"
            placeholder="search"
            name="search_text"
            value={search_text}
            onChange={updeatFilter}
          />
        </div>
        <div className="FilterCompo__section__Category">
          <h4 className="cc__tt">category</h4>
          <ul className="cc_ul">
            {categorys.map((c, i) => {
              return (
                <button
                  type="button"
                  className="cc__li"
                  name="category"
                  key={i}
                  onClick={updeatFilter}
                >
                  {c}
                </button>
              );
            })}
          </ul>
        </div>
        <div className="FilterCompo__section__Company">
          <h4 className="cc__tt">Company</h4>
          <select
            className="cc_ul"
            value={company}
            name={"company"}
            onChange={updeatFilter}
          >
            {companys.map((c, i) => {
              return (
                <option className="cc__li" key={i}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>
        <div className="FilterCompo__section__Colors">
          <h4 className="cc__tt">colors</h4>
          <ul className="color__ul">
            {colors.map((c, i) => {
              if (c === "all") {
                return (
                  <button
                    type="button"
                    key={i}
                    name="all"
                    className="cc__li"
                    data-color="all"
                    value={"all"}
                    onClick={updeatFilter}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  type="button"
                  className="cc__span"
                  key={i}
                  onClick={updeatFilter}
                  style={{ background: c }}
                  data-color={c}
                  name="color"
                ></button>
              );
            })}
          </ul>
        </div>
        <div className="FilterCompo__section__price">
          <p className="price">{price}</p>
          <input
            type="range"
            min={min_price}
            max={max_price}
            name="price"
            onChange={updeatFilter}
            value={price}
          />
        </div>
      </form>
      <div className="shiping__AND__clear">
        <div className="Shipping">
          <p className="Shipping__tt">free Shipping</p>

          <input
            name="shipping"
            type="checkbox"
            className="Shipping__free"
            onChange={updeatFilter}
            checked={shipping}
          />
        </div>
        <div className="clrFilter">
          <button className="clrFilter">clear filter</button>
        </div>
      </div>
    </article>
  );
};

export default FilterCompo;
