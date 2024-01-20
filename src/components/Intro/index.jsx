import {Header} from "../Common/Title";
import styled from "styled-components";

const Intro = () => {
    return (
        <Container>
            <Greetings>
                <Picture src="/header/sebas.png">
                </Picture>
                <Text>
                    <Header color="#4eb3dea3">Hello I'm</Header>
                    <Header color="#277292">Sebastian Ardila</Header>
                </Text>
            </Greetings>
        </Container>
    )
}



const Picture = styled.img`
    width: 10vmax;
    height: 10vmax;
`;
const Greetings = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 10px;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

export default Intro;