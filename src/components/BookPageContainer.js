import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PendingWrapper } from "../style/styles";
import { requestApiData, requestBookData } from "../actions";
import BookPage from "./BookPage";
import Header from "./Header";

const BookPageContainer = ({ location }) => {
  const comics = useSelector(state => state.comics);
  const loading = useSelector(state => state.loading);
  const book = useSelector(state => state.book);
  const count = useRef(0);

  const isbn13 = location.pathname.slice(1, 14);

  const dispatch = useDispatch();

  console.log("render: ", (count.current += 1));

  useEffect(() => {
    if (!book || book.isbn13 !== isbn13) {
      dispatch(requestBookData(isbn13));
    }
  }, [isbn13, dispatch, book]);

  if (!comics.length) {
    dispatch(requestApiData(true));
  }

  if (loading) {
    return <PendingWrapper>Loading...</PendingWrapper>;
  }

  return (
    <>
      <Header />
      <BookPage book={book} comics={comics} />
    </>
  );
};

export default BookPageContainer;
