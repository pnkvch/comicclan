import React from "react";
import BooksSlider from "./BooksSlider";
import { PendingWrapper } from "../style/styles";
import { filterPlainArray, getUniqueValues, sortBooks } from "./utils";

const RenderData = ({ books, criteria }) => {
  if (!books?.length) {
    return <PendingWrapper>There is no match</PendingWrapper>;
  }

  const sortedBooks = sortBooks(books, criteria);
  let unique = getUniqueValues(sortedBooks, criteria),
    filters,
    filteredArray;

  if (criteria === "random") {
    return (
      <>
        <h2>Random Books</h2>
        <BooksSlider books={sortedBooks} />
      </>
    );
  }

  return unique.map((item, index) => {
    filters = {
      [criteria]: [item]
    };

    filteredArray = filterPlainArray(sortedBooks, filters);

    return (
      <div key={index}>
        <h2>{item}</h2>
        <BooksSlider books={filteredArray} />
      </div>
    );
  });
};

export default RenderData;
