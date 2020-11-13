import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import {
    Button,
    ButtonWrapper,
    InputWrapper,
    HomeWrapper,
    Wrapper,
    PendingWrapper
} from "../style/styles";
import { requestApiData } from "../actions";
import RenderData from "./RenderData";
import Header from "./Header";
import { shuffleArray, sortArrayByCriteria } from "./utils";
import PlaceholderGrid from "./PlaceholderGrid";
import { useDebounceEffect } from "./useDebounceEffect";
import ProgressBar from "./ProgressBar";

const HomePage = props => {
    const { comics, loading } = props;
    const [value, setValue] = useState("");
    const [criteria, setCriteria] = useState("startYear");
    const [buttonStyle, setButtonStyle] = useState({
        year: true,
        writer: false,
        artist: false,
        owner: false,
        random: false
    });

    const dispatch = useDispatch();

    useDebounceEffect(() => {
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
                    <Button prop={buttonStyle.year}>startYear</Button>
                    <Button prop={buttonStyle.writer}>Writer</Button>
                    <Button prop={buttonStyle.artist}>Artist</Button>
                    <Button prop={buttonStyle.owner}>Owner</Button>
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
                    <RenderData
                        comics={handlePass(comics)}
                        criteria={criteria}
                    />
                )}
            </Wrapper>
        </HomeWrapper>
    );
};

const mapStateToProps = state => {
    const { comics, loading } = state;
    return { comics, loading };
};

export default connect(mapStateToProps)(HomePage);
