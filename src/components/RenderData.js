import React from "react";
import BooksSlider from "./BooksSlider";
import { PendingWrapper } from "../style/styles";
import { filterPlainArray, getUniqueValues, sortComics } from "./utils";

const RenderData = ({ comics, criteria }) => {
  if (!comics?.length) {
    return <PendingWrapper>There is no match</PendingWrapper>;
  }

  const sortedComics = sortComics(comics, criteria);
  let unique = getUniqueValues(sortedComics, criteria),
    filters,
    filteredArray;

  if (criteria === "random") {
    return (
      <>
        <h2>Random Books</h2>
        <BooksSlider comics={sortedComics} />
      </>
    );
  }

  return unique.map((item, index) => {
    filters = {
      [criteria]: [item]
    };

    filteredArray = filterPlainArray(sortedComics, filters);

    return (
      <div key={index}>
        <h2>{item}</h2>
        <BooksSlider comics={filteredArray} />
      </div>
    );
  });
};

export default RenderData;
