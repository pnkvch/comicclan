import React from "react";
import BooksSlider from "./BooksSlider";
import { PendingWrapper } from "../style/styles";
import { filterPlainArray, getUniqueValues, sortComics } from "./utils";

const sortByFirstLetter = (arr, letter) => {
  let firstCharacter, itemIdx;
  const newArr = arr.filter((item, index) => {
    if (item.startsWith(letter)) {
      itemIdx = index;
    }
    return item.startsWith(letter);
  });
  if (arr[itemIdx + 1]) {
    firstCharacter = arr[itemIdx + 1].charAt(0);
  }
  console.log(newArr, itemIdx, firstCharacter);

  return [newArr, firstCharacter];
};

const RenderData = ({ comics, criteria }) => {
  if (!comics?.length) {
    return <PendingWrapper>There is no match</PendingWrapper>;
  }

  const sortedComics = sortComics(comics, criteria);
  const unique = getUniqueValues(sortedComics, criteria);
  let heading,
    filters,
    filteredArray,
    letter = unique[0].charAt(0),
    newChar;

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

    console.log(letter, unique);

    if (criteria === "title") {
      [filteredArray, newChar] = sortByFirstLetter(unique, letter);
      console.log(filteredArray);
      letter = newChar;
    } else {
      filteredArray = filterPlainArray(sortedComics, filters);
      heading = filteredArray[0][criteria];
    }
    let idx = 0,
      i;

    const asa = sortedComics.filter((item, index) => {
      if (item.title === filteredArray[idx]) {
        i = idx;
        idx++;
      }
      return item.title === filteredArray[i];
    });

    return (
      <div key={index}>
        <h2>{letter}</h2>
        <BooksSlider comics={asa} />
      </div>
    );
  });
};

export default RenderData;
