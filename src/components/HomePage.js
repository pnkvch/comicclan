import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonWrapper,
  InputWrapper,
  HomeWrapper,
  Wrapper,
  PendingWrapper
} from "../style/styles";
import { changeCriteria, requestApiData } from "../actions";
import { useDebounceEffect } from "./useDebounceEffect";
import RenderData from "./RenderData";
import Header from "./Header";
import { PlaceholderGrid } from "./PlaceholderGrid";
import ProgressBar from "./ProgressBar";

const HomePage = () => {
  const books = useSelector(state => state.dataReducer.books);
  const loading = useSelector(state => state.dataReducer.loading);
  const criteria = useSelector(state => state.criteriaReducer.criteria);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  useDebounceEffect(() => {
    if (books?.length && value === "") {
      return;
    }
    dispatch(requestApiData(value));
  }, [value]);

  const handleButtonClick = e => {
    if (e.target.tagName.toLowerCase() === "button") {
      dispatch(changeCriteria(e.target.innerText.toLowerCase()));
    }
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <HomeWrapper>
      <Header />
      <ProgressBar />
      <Wrapper>
        <InputWrapper
          type="search"
          placeholder="Search by book name"
          value={value}
          onChange={handleInputChange}
        />

        <ButtonWrapper onClick={handleButtonClick}>
          <Button prop={criteria === "title"}>Title</Button>
          <Button prop={criteria === "price"}>Price</Button>
          <Button prop={criteria === "random"}>Random</Button>
        </ButtonWrapper>
        {loading ? (
          <PendingWrapper>
            {Array(10)
              .fill(1)
              .map((_item, index) => {
                return <PlaceholderGrid key={index} />;
              })}
          </PendingWrapper>
        ) : (
          <RenderData books={books} criteria={criteria} />
        )}
      </Wrapper>
    </HomeWrapper>
  );
};

export default HomePage;
