import React from "react";
import EmptyStar from "../images/EmptyStar.svg";
import FullStar from "../images/FullStar.svg";

const Rating = props => {
  const rating = { props };
  const ratingArray = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      const element = <img key={i} src={FullStar} alt="full star" />;
      ratingArray.push(element);
    } else {
      const element = <img key={i} src={EmptyStar} alt="empty star" />;
      ratingArray.push(element);
    }
  }

  return <div>{ratingArray}</div>;
};
export default Rating;
