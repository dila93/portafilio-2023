import styled from "styled-components";
import Tag from "../Common/Tag";

import { ReactComponent as ReactIcon } from '../../Icons/react.svg';
import { ReactComponent as JavascriptIcon } from '../../Icons/javascript.svg';
import { ReactComponent as HTML5Icon } from '../../Icons/html5.svg';
import { ReactComponent as CSS3Icon } from '../../Icons/css3.svg';
import { ReactComponent as NodeIcon } from '../../Icons/node.svg';
import { ReactComponent as TypescriptIcon } from '../../Icons/typescript.svg';
import Title from "../Common/Title";


const getYearsOfExperience = (date) => {
    const currentDate = new Date();
    return currentDate.getFullYear() - date.getFullYear();
}

const Technologies = () => {
    return(
        <Container>
            <Title>
                MAIN TECH
            </Title>
            <Ecosystem>
                <TechnologyContainer>
                    <ReactIcon fill="#149eca" width="40px" height="40px"/>
                    <Tag borderColor="lightgray" color="dimgray">React JS</Tag>
                    <ExperienceText>{getYearsOfExperience(new Date(2019, 0, 1))} Years</ExperienceText>
                </TechnologyContainer>
                <TechnologyContainer>
                    <JavascriptIcon fill="#f7e02a" width="40px" height="40px"/>
                    <Tag borderColor="lightgray" color="dimgray">Javascript</Tag>
                    <ExperienceText>{getYearsOfExperience(new Date(2017, 0, 1))} Years</ExperienceText>
                </TechnologyContainer>
                <TechnologyContainer>
                    <HTML5Icon fill="#e6532f" width="40px" height="40px"/>
                    <Tag borderColor="lightgray" color="dimgray">HTML</Tag>
                    <ExperienceText>{getYearsOfExperience(new Date(2017, 0, 1))} Years</ExperienceText>
                </TechnologyContainer>
                <TechnologyContainer>
                    <CSS3Icon fill="#237abe" width="40px" height="40px"/>
                    <Tag borderColor="lightgray" color="dimgray">CSS</Tag>
                    <ExperienceText>{getYearsOfExperience(new Date(2017, 0, 1))} Years</ExperienceText>
                </TechnologyContainer>
                <TechnologyContainer>
                    <NodeIcon fill="#90ca51" width="40px" height="40px"/>
                    <Tag borderColor="lightgray" color="dimgray">Node JS</Tag>
                    <ExperienceText>{getYearsOfExperience(new Date(2020, 0, 1))} Years</ExperienceText>
                </TechnologyContainer>
                <TechnologyContainer>
                    <TypescriptIcon fill="#387cc8" width="40px" height="40px"/>
                    <Tag borderColor="lightgray" color="dimgray">Typescript</Tag>
                    <ExperienceText>{getYearsOfExperience(new Date(2020, 0, 1))} Years</ExperienceText>
                </TechnologyContainer>
            </Ecosystem>
        </Container>
    )
};

const Container = styled.div`
    margin: 20px 0;
`;

const Ecosystem = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap:  wrap;
    gap: 10px;
`

const TechnologyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-direction: column;
`

const ExperienceText = styled.span`
    font-weight: 900;
    font-family: arial;
    font-size: 12px;
`;

export default Technologies;