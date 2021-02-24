import React from "react";
import { Link } from "react-router-dom";
import BackIcon from "../images/BackIcon.svg";

import { BackToCollection, Wrapper } from "../style/styles";
import BookInformation from "./BookInformation";

const BookPage = ({ book, comics }) => {
    return (
        <>
            <Wrapper>
                <Link to="/">
                    <BackToCollection>
                        <img src={BackIcon} alt="back" />
                        Back to Collection
                    </BackToCollection>
                </Link>

                <BookInformation book={book} comics={comics} />
            </Wrapper>
        </>
    );
};

export default BookPage;
