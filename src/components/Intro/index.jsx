import styled from "styled-components";
import { getYearsOfExperience } from "../Common/util";

const Intro = () => {
    return (
        <Container>
            <Greetings>
                <Name>HELLO I'M <Highlight>SEBASTIAN ARDILA</Highlight> SOFTWARE DEVELOPER <Highlight>{getYearsOfExperience(new Date(2017, 0, 1))} YEARS EXPERIENCE</Highlight> FRONTEND DEVELOPER</Name>
            </Greetings>
        </Container>
    )
}

const Name = styled.h1`
    font-size: 3vmax;
    color: #727272;
    font-family: system-ui;
    font-weight: 200;
    text-align: left;
    margin: 0;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
`;

const Highlight = styled.p`
    margin: 0;
    display: inline;
    padding: 0 10px;
    background: wheat;
    font-weight: 300;
`;

const Greetings = styled.div`
    border: 2px solid lightgray;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    max-width: 500px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 10px;
`;

export default Intro;