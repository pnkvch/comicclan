import React from "react";
import ContentLoader from "react-content-loader";

export const PlaceholderGrid = props => (
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

export const BookPlaceholderGrid = props => (
  <ContentLoader
    width={window.innerWidth}
    height={410}
    backgroundColor="#535353"
    foregroundColor="#777777"
    {...props}
  >
    <rect x="6" y="0" rx="10" ry="10" width="270" height="400" />
    <rect x="350" y="0" rx="0" ry="0" width="250" height="10" />
    <rect x="350" y="20" rx="0" ry="0" width="150" height="10" />
    <rect x="350" y="40" rx="0" ry="0" width="160" height="10" />
    <rect x="350" y="60" rx="0" ry="0" width="180" height="10" />
    <rect x="350" y="80" rx="0" ry="0" width="140" height="10" />
    <rect x="350" y="100" rx="0" ry="0" width="200" height="10" />
    <rect x="350" y="120" rx="0" ry="0" width="130" height="10" />
  </ContentLoader>
);
