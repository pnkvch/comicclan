import React from "react";
import ContentLoader from "react-content-loader";

const PlaceholderGrid = props => (
    <ContentLoader
        width={250}
        height={360}
        viewBox="0 0 400 550"
        backgroundColor="#535353"
        foregroundColor="#777777"
        {...props}
    >
        <rect x="10" y="0" rx="10" ry="10" width="300" height="446" />
        <rect x="10" y="470" rx="0" ry="0" width="250" height="8" />
        <rect x="10" y="490" rx="0" ry="0" width="150" height="8" />
        <rect x="10" y="510" rx="0" ry="0" width="160" height="8" />
    </ContentLoader>
);

export default PlaceholderGrid;
