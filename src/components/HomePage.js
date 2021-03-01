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
import { requestApiData } from "../actions";
import { shuffleArray, sortArrayByCriteria } from "./utils";
import { useDebounceEffect } from "./useDebounceEffect";
import RenderData from "./RenderData";
import Header from "./Header";
import PlaceholderGrid from "./PlaceholderGrid";
import ProgressBar from "./ProgressBar";

const HomePage = () => {
  const comics = useSelector(state => state.comics);
  const loading = useSelector(state => state.loading);
  const [value, setValue] = useState("");
  const [criteria, setCriteria] = useState("title");
  const [buttonStyle, setButtonStyle] = useState({
    title: true,
    price: false,
    random: false
  });

  const dispatch = useDispatch();

  useDebounceEffect(() => {
    if (comics.length && value === "") {
      return;
    }

    dispatch(requestApiData(value));
    console.log(`dispatched ${value}`);
  }, [value]);

  const handleButtonClick = e => {
    if (e.target.tagName.toLowerCase() === "button") {
      setCriteria(e.target.innerText.toLowerCase());
    }
    setButtonStyle({ [e.target.innerText.toLowerCase()]: true });
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handlePass = arr => {
    return criteria === "random"
      ? shuffleArray(arr)
      : arr.sort(sortArrayByCriteria(criteria));
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
          <Button prop={buttonStyle.title}>Title</Button>
          <Button prop={buttonStyle.price}>Price</Button>
          <Button prop={buttonStyle.random}>Random</Button>
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
          <RenderData comics={handlePass(comics)} criteria={criteria} />
        )}
      </Wrapper>
    </HomeWrapper>
  );
};

export default HomePage;
