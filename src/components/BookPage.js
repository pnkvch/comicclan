import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    BookPageWrapper,
    InfoWrapper,
    ListWrapper,
    Wrapper,
    PrimaryImageWrapper,
    BackToCollection,
    DescriptionWrapper
} from "../style/styles";
import EmptyStar from "../images/EmptyStar.svg";
import FullStar from "../images/FullStar.svg";
import BackIcon from "../images/BackIcon.svg";
import Header from "./Header";
import { requestApiData } from "../actions";
import Book from "./Book";
import { shuffleArray } from "./utils";
import { Link } from "react-router-dom";

const BookPage = props => {
    const comics = useSelector(state => state.comics);
    const { state } = props.location;
    const rating = Array.from({ length: 5 }, (_, y) =>
        y < state.rating ? 1 : 0
    );

    const dispatch = useDispatch();

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

                <BookPageWrapper>
                    <PrimaryImageWrapper>
                        <img
                            src={`${state.thumbnail.path}.${state.thumbnail.extension}`}
                            alt="book"
                        />
                    </PrimaryImageWrapper>

                    <InfoWrapper>
                        <div>
                            <h2>{state.title}</h2>

                            <div>
                                {rating.map((x, i) =>
                                    x ? (
                                        <img
                                            key={i}
                                            src={FullStar}
                                            alt="full star"
                                        />
                                    ) : (
                                        <img
                                            key={i}
                                            src={EmptyStar}
                                            alt="empty star"
                                        />
                                    )
                                )}
                            </div>
                        </div>

                        <DescriptionWrapper>
                            <div>
                                Writer: <span>{state.writer}</span>
                            </div>
                            <div>
                                Artist: <span>{state.artist}</span>
                            </div>
                            <div>
                                Publication: <span>{state.publication}</span>
                            </div>
                            <div>
                                Owner: <span>{state.owner}</span>
                            </div>
                        </DescriptionWrapper>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et consequuntur cupiditate obcaecati expedita
                            quia, explicabo dolore reprehenderit delectus vero
                            provident laborum suscipit sit eligendi eum,
                            deserunt dignissimos? In enim tempora sed a quasi,
                            dignissimos expedita blanditiis aspernatur eum,
                            odit, odio dolores corrupti illo magni delectus
                            itaque nesciunt natus atque repellat.
                        </p>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptas doloremque enim rerum quis placeat
                            laborum sequi accusamus commodi dicta. Sit officiis
                            porro maxime esse maiores consequuntur corrupti quos
                            rem unde neque laudantium sunt, dolores odio
                            eligendi, eius minima nulla molestiae numquam.
                            Nostrum, quia iusto labore eveniet consequatur nam
                            aperiam itaque sunt quo adipisci eius iure tempora
                            exercitationem voluptas pariatur eos nisi explicabo
                            quis consequuntur, quae culpa quod ab? Laborum rem
                            hic, nobis natus quod accusamus, soluta saepe earum
                            sapiente minus eaque molestias amet rerum ipsam?
                            Iure, atque corporis quibusdam fugiat inventore,
                            assumenda excepturi officiis, debitis earum itaque
                            at necessitatibus laboriosam!
                        </p>
                    </InfoWrapper>
                </BookPageWrapper>

                <h2>Other Random Books</h2>

                <ListWrapper>
                    {shuffleArray(comics).map((x, i) => {
                        return (
                            <Link
                                key={i}
                                to={{
                                    pathname: `${x.id}`,
                                    state: x
                                }}
                            >
                                <Book
                                    image={x.thumbnail}
                                    title={x.title}
                                    owner={x.owner}
                                />
                            </Link>
                        );
                    })}
                </ListWrapper>
            </Wrapper>
        </>
    );
};

export default BookPage;
