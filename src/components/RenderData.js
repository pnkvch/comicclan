import React from "react";
import BooksSlider from "./BooksSlider";
import { PendingWrapper } from "../style/styles";
import { filterPlainArray, getUniqueValues } from "./utils";

const RenderData = ({ comics, criteria }) => {
    const unique = getUniqueValues(comics, criteria);
    let heading, filters, filteredArray;

    if (!comics.length) {
        return <PendingWrapper>There is no match</PendingWrapper>;
    }

    if (criteria === "random") {
        return (
            <>
                <h2>Random Books</h2>
                <BooksSlider comics={comics} />
            </>
        );
    }

    return unique.map((item, index) => {
        filters = {
            [criteria]: [item]
        };

        filteredArray = filterPlainArray(comics, filters);
        heading = filteredArray[0][criteria];

        return (
            <div key={index}>
                <h2>{heading}</h2>
                <BooksSlider comics={filteredArray} />
            </div>
        );
    });
};

export default RenderData;
