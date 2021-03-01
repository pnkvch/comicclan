import React from "react";
import { BookWrapper } from "../style/styles";

const Book = props => {
  const { image, title, owner } = props;

  return (
    <BookWrapper>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        ISBN: <span>{owner}</span>
      </p>
    </BookWrapper>
  );
};

export default Book;
