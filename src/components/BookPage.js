import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    BookPageWrapper,
    InfoWrapper,
    Wrapper,
    PrimaryImageWrapper,
    BackToCollection,
    DescriptionWrapper,
    PendingWrapper
} from "../style/styles";

import BackIcon from "../images/BackIcon.svg";
import Header from "./Header";
import BooksSlider from "./BooksSlider";
import PlaceholderGrid from "./PlaceholderGrid";
import { requestApiData, requestBookData } from "../actions";
import { shuffleArray } from "./utils";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const BookPage = props => {
    const { state } = props.location;
    const comics = useSelector(state => state.comics);
    const loading = useSelector(state => state.loading);
    const book = useSelector(state => state.book);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestBookData(state.isbn13));
    }, [state.isbn13, dispatch]);

    if (!comics.length) {
        dispatch(requestApiData());
    }
    return (
        <>
            <Header />

            <Wrapper>
                <Link to="/">
                    <BackToCollection>
                        <img src={BackIcon} alt="back" />
                        Back to Collection
                    </BackToCollection>
                </Link>

                {loading ? (
                    <PendingWrapper>
                        {Array(5)
                            .fill(1)
                            .map((_item, index) => {
                                return <PlaceholderGrid key={index} />;
                            })}
                    </PendingWrapper>
                ) : (
                    <>
                        <BookPageWrapper>
                            <PrimaryImageWrapper>
                                <img src={book.image} alt="book" />
                            </PrimaryImageWrapper>

                            <InfoWrapper>
                                <div>
                                    <h2>{book.title}</h2>

                                    <Rating rating={parseInt(book.rating)} />
                                </div>

                                <DescriptionWrapper>
                                    <div>
                                        Authors: <span>{book.authors}</span>
                                    </div>
                                    <div>
                                        Year: <span>{book.year}</span>
                                    </div>
                                    <div>
                                        Publisher: <span>{book.publisher}</span>
                                    </div>
                                    <div>
                                        Price: <span>{book.price}</span>
                                    </div>
                                    <div>
                                        ISBN: <span>{book.isbn13}</span>
                                    </div>
                                </DescriptionWrapper>

                                <p>{book.subtitle}</p>

                                <p>{book.desc}</p>
                            </InfoWrapper>
                        </BookPageWrapper>

                        <h2>Related Books</h2>

                        <BooksSlider comics={shuffleArray(comics)} />
                    </>
                )}
            </Wrapper>
        </>
    );
};

export default BookPage;
