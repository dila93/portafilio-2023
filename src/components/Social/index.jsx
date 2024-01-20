import Title from "../Common/Title";
import SocialCard from "./SocialCard";
import styled from "styled-components";

const Social = ({data}) => {
    return (
        <>
            <Title>SOCIAL</Title>
            <Presentations role="presentations">
                {
                    data.map((item, index) => {
                        return <SocialCard key={index} item={item.social}></SocialCard>
                    })
                }
            </Presentations>
        </>
    )
};

const Presentations = styled.div`
    display: flex;
    justify-content: start;
    align-items: stretch;
    gap: 20px;
    flex-wrap: wrap;
`

export default Social;