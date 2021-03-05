import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { requestBookData } from "../actions";
import { ListWrapper } from "../style/styles";
import Book from "./Book";

const BooksSlider = ({ comics }) => {
  const dispatch = useDispatch();
  return (
    <ListWrapper>
      {comics.map((comic, index) => (
        <Link
          key={index}
          onClick={() => dispatch(requestBookData(comic.isbn13))}
          to={{
            pathname: `${comic.isbn13}`
          }}
        >
          <Book image={comic.image} title={comic.title} owner={comic.isbn13} />
        </Link>
      ))}
    </ListWrapper>
  );
};

export default BooksSlider;
