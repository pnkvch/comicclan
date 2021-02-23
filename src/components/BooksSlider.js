import React from "react";
import { Link } from "react-router-dom";
import { ListWrapper } from "../style/styles";
import Book from "./Book";

const BooksSlider = ({ comics }) => {
    return (
        <ListWrapper>
            {comics.map((comic, index) => (
                <Link
                    key={index}
                    to={{
                        pathname: `${comic.isbn13}`
                    }}
                >
                    <Book
                        image={comic.image}
                        title={comic.title}
                        owner={comic.isbn13}
                    />
                </Link>
            ))}
        </ListWrapper>
    );
};

export default BooksSlider;
