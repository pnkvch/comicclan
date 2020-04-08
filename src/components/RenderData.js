import React from "react";
import { ListWrapper, PendingWrapper } from "../style/styles";
import { Link } from "react-router-dom";
import Book from "./Book";
import { getUniqueValues } from "./utils";

const RenderData = props => {
    const { comics, criteria } = props;
    const unique = getUniqueValues(comics, criteria);

    if (!comics.length) {
        return <PendingWrapper>There is no match</PendingWrapper>;
    }

    if (criteria === "random") {
        return (
            <>
                <h2>Random Books</h2>
                <ListWrapper>
                    {comics.map((x, index) => (
                        <Link
                            key={index}
                            to={{
                                pathname: `${x.name
                                    .replace(/ /g, "-")
                                    .toLowerCase()}`,
                                state: x
                            }}
                        >
                            <Book
                                image={x.image}
                                name={x.name}
                                owner={x.owner}
                            />
                        </Link>
                    ))}
                </ListWrapper>
            </>
        );
    } else {
        return unique.map((item, index) => {
            let filters = {
                [criteria]: [item]
            };

            const filterPlainArray = (array, filters) => {
                const filterKeys = Object.keys(filters);
                return array.filter(item => {
                    return filterKeys.every(key => {
                        if (!filters[key].length) return true;
                        return filters[key].find(
                            filter => filter === item[key]
                        );
                    });
                });
            };

            let filteredArray = filterPlainArray(comics, filters);

            return (
                <div key={index}>
                    <h2>{filteredArray[0][criteria]}</h2>
                    <ListWrapper>
                        {filteredArray.map((x, index) => (
                            <Link
                                key={index}
                                to={{
                                    pathname: `${x.name
                                        .replace(/ /g, "-")
                                        .toLowerCase()}`,
                                    state: x
                                }}
                            >
                                <Book
                                    image={x.image}
                                    name={x.name}
                                    owner={x.owner}
                                />
                            </Link>
                        ))}
                    </ListWrapper>
                </div>
            );
        });
    }
};

export default RenderData;
