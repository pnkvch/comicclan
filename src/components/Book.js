import React from "react";
import { BookWrapper } from "../style/styles";

const Book = props => {
    const { image, title, owner } = props;
    const { extension, path } = image;

    return (
        <BookWrapper>
            <img src={`${path}.${extension}`} alt="" />
            <h3>{title}</h3>
            <p>
                Owned By <span>{owner}</span>
            </p>
        </BookWrapper>
    );
};

export default Book;
