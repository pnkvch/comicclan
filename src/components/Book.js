import React from "react";
import { BookWrapper } from "../style/styles";

const Book = props => {
    const { image, name, owner } = props;

    return (
        <BookWrapper>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>
                Owned By <span>{owner}</span>
            </p>
        </BookWrapper>
    );
};

export default Book;
