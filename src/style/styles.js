import styled from "styled-components";
import SearchIcon from "../images/SearchIcon.svg";
import { device } from "./sizes";

const fontFamily = '"Roboto", sans-serif';
const headerBackgroundColor = "#535353";
const primaryBackgroundColor = "#333333";
const primaryFontColor = "#aaaaaa";
const primaryFontSize = "1em";

export const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 4.5em;

  h2 {
    color: #cccccc;
  }

  @media ${device.mobileS} {
    justify-content: center;
  }
  @media ${device.tablet} {
    width: 93%;
  }
`;

export const HeaderWrapper = styled.header`
  background-color: ${headerBackgroundColor};
  padding: 1em;
  padding-left: 2.5%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  @media ${device.tablet} {
    padding-left: 3%;
  }
`;

export const Button = styled.button`
  color: ${props => (props.prop ? "white" : "#777777")};
  background-color: ${props =>
    props.prop ? "#F15454" : primaryBackgroundColor};
  border-radius: 19px;
  padding: 0.5em;
  width: 4.6em;
  border: none;
  font-size: ${primaryFontSize};
  font-weight: bold;
  outline: none;
  cursor: pointer;
  margin-right: 0.5em;
`;

export const ButtonWrapper = styled.div`
  display: inline;
`;

export const HomeWrapper = styled.div`
  color: ${primaryFontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputWrapper = styled.input`
  -webkit-appearance: none;
  background-color: ${primaryBackgroundColor};
  border: 3px solid #777777;
  border-radius: 8px;
  width: 100%;
  height: 3em;
  color: white;
  margin: 1.2em 0;
  padding-left: 2.5em;
  font-size: ${primaryFontSize};
  position: relative;
  background: url(${SearchIcon}) no-repeat 8px 8px;

  &::placeholder {
    color: #5a5a5a;
    font-weight: bold;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  border-bottom: 2px solid ${headerBackgroundColor};
  padding-bottom: 1.5em;

  &::-webkit-scrollbar {
    display: none;
  }
  a {
    color: ${primaryFontColor};
    text-decoration: none;
    max-width: 225px;
    margin-right: 2em;
  }

  img {
    width: 100%;
  }
`;

export const MainWrapper = styled.div`
  font-family: ${fontFamily};
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1050px) {
    font-size: 14px;
  }
`;

export const BookWrapper = styled.div`
  padding-right: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: end;
  color: ${primaryFontColor};
  flex-flow: row wrap;

  div {
    flex-grow: 2;
  }

  h3 {
    color: #cccccc;
    margin-bottom: 0;
  }

  span {
    color: #cccccc;
  }
`;

export const BookPageWrapper = styled.div`
  display: flex;
  color: #cccccc;
  border-bottom: 2px solid ${headerBackgroundColor};
  padding-bottom: 4em;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  h2 {
    color: ${primaryFontColor};
  }

  div:first-child {
    display: inherit;
    flex-direction: row;
  }
  div:first-child div {
    margin-top: 1.5em;
  }

  div:first-child h2 {
    margin-top: 0.7em;

    font-size: 1.8em;
    padding-right: 0.8em;
  }

  p:nth-child(4) {
    margin: 0;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const PrimaryImageWrapper = styled.div`
  max-width: 330px;
  width: 100%;

  img {
    height: auto;
    width: 94%;
    margin: 1.2em 1.2em 0 0;
    @media ${device.tablet} {
      width: 100%;
      margin-right: 0;
    }
  }
`;

export const BackToCollection = styled.div`
  display: flex;
  text-decoration-line: underline;
  color: #777777;
  margin: 20px 0 10px 0;
  font-size: 1.1em;
  img {
    padding-right: 5px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #999999;
  div {
    margin-bottom: 0.7em;
    span {
      color: #cccccc;
      margin-left: 0.2em;
    }
  }
`;

export const PendingWrapper = styled.div`
  font-size: 22px;
  padding-top: 2em;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const ProgressBarWrapper = styled.div.attrs(({ scroll }) => ({
  style: {
    width: scroll
  }
}))`
  position: fixed;
  height: 3px;
  background-color: #cccccc;
  z-index: 1;
  top: 63px;
  transition: width 0.1s ease-out;
`;
