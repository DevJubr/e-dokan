import React from "react";
import "./StarCompo.scss";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const StarCompo = ({ reviews, stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <main className="star_con">
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </main>
  );
};

export default StarCompo;
