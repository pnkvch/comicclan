import React, { useState, useEffect } from "react";
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

const HomePage = props => {
    const { comics, loading } = props;
    const [value, setValue] = useState("");
    const [criteria, setCriteria] = useState("year");
    const [obj, setObj] = useState({
        year: true,
        writer: false,
        artist: false,
        owner: false,
        random: false
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestApiData());
    }, [dispatch]);

    const handleButtonClick = e => {
        if (e.target.tagName.toLowerCase() === "button") {
            setCriteria(e.target.innerText.toLowerCase());
        }
        setObj({ [e.target.innerText.toLowerCase()]: true });
    };

    const handleInputChange = e => {
        setValue(e.target.value);
        dispatch(requestApiData(e.target.value));
    };

    const handlePass = arr => {
        return criteria === "random"
            ? shuffleArray(arr)
            : arr.sort(sortArrayByCriteria(criteria));
    };

    return (
        <HomeWrapper>
            <Header />
            <Wrapper>
                <InputWrapper
                    type="search"
                    placeholder="Search by book name"
                    value={value}
                    onChange={handleInputChange}
                />

                <ButtonWrapper onClick={handleButtonClick}>
                    <Button prop={obj.year}>Year</Button>
                    <Button prop={obj.writer}>Writer</Button>
                    <Button prop={obj.artist}>Artist</Button>
                    <Button prop={obj.owner}>Owner</Button>
                    <Button prop={obj.random}>Random</Button>
                </ButtonWrapper>

                {loading ? (
                    <PendingWrapper>
                        {Array(10)
                            .fill(1)
                            .map(_item => {
                                return <PlaceholderGrid />;
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
