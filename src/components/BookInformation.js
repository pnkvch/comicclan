import React from "react";
import {
  BookPageWrapper,
  DescriptionWrapper,
  InfoWrapper,
  PrimaryImageWrapper
} from "../style/styles";
import BooksSlider from "./BooksSlider";
import Rating from "./Rating";
import { shuffleArray } from "./utils";

const BookInformation = props => {
  const {
    image,
    title,
    rating,
    authors,
    year,
    publisher,
    price,
    isbn13,
    subtitle,
    desc
  } = props.book;

  return (
    <>
      <BookPageWrapper>
        <PrimaryImageWrapper>
          <img src={image} alt="book" />
        </PrimaryImageWrapper>

        <InfoWrapper>
          <div>
            <h2>{title}</h2>

            <Rating rating={parseInt(rating)} />
          </div>

          <DescriptionWrapper>
            <div>
              Authors: <span>{authors}</span>
            </div>
            <div>
              Year: <span>{year}</span>
            </div>
            <div>
              Publisher: <span>{publisher}</span>
            </div>
            <div>
              Price: <span>{price}</span>
            </div>
            <div>
              ISBN: <span>{isbn13}</span>
            </div>
          </DescriptionWrapper>

          <p>{subtitle}</p>

          <p>{desc}</p>
        </InfoWrapper>
      </BookPageWrapper>

      <h2>Related Books</h2>

      <BooksSlider comics={shuffleArray(props.comics)} />
    </>
  );
};

export default BookInformation;
