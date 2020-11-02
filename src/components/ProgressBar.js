import React, { useEffect, useState } from "react";
import { ProgressBarWrapper } from "../style/styles.js";

const ProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    const getDocumentHeight = () => {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
    };

    const calculateScrollDistance = () => {
        const currentScroll = window.pageYOffset;
        const browserHeight = window.innerHeight;
        const documentHeight = getDocumentHeight();

        const totalScrollLength = documentHeight - browserHeight;
        const scrollPosition =
            Math.floor((currentScroll / totalScrollLength) * 100 * 10) / 10;

        setScroll(scrollPosition);
    };

    const listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            calculateScrollDistance();
        });
    };

    useEffect(() => {
        listenToScrollEvent();
    });

    return <ProgressBarWrapper scroll={`${scroll}%`} />;
};

export default ProgressBar;
