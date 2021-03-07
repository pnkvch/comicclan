import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { requestBookData } from "../actions";
import { ListWrapper } from "../style/styles";
import Book from "./Book";

const BooksSlider = ({ books }) => {
  const dispatch = useDispatch();
  return (
    <ListWrapper>
      {books.map((book, index) => (
        <Link
          key={index}
          onClick={() => dispatch(requestBookData(book.isbn13))}
          to={{
            pathname: `${book.isbn13}`
          }}
        >
          <Book image={book.image} title={book.title} owner={book.isbn13} />
        </Link>
      ))}
    </ListWrapper>
  );
};

export default BooksSlider;
