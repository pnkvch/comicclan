import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PendingWrapper } from "../style/styles";
import { requestApiData, requestBookData } from "../actions";
import BookPage from "./BookPage";
import Header from "./Header";
import { BookPlaceholderGrid, PlaceholderGrid } from "./PlaceholderGrid";

const BookPageContainer = ({ location }) => {
  const comics = useSelector(state => state.comics);
  const loading = useSelector(state => state.loading);
  const book = useSelector(state => state.book);

  const isbn13 = location.pathname.slice(1, 14);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!comics.length) {
      dispatch(requestApiData());
    }
    if (Object.keys(book).length === 0) {
      dispatch(requestBookData(isbn13));
    }
  }, [isbn13, dispatch, book, comics.length]);

  if (loading) {
    return (
      <>
        <Header />

        <PendingWrapper bookPage={true}>
          <BookPlaceholderGrid />
          {Array(5)
            .fill(1)
            .map((_, index) => {
              return <PlaceholderGrid key={index} />;
            })}
        </PendingWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <BookPage book={book} comics={comics} />
    </>
  );
};

export default BookPageContainer;
