import styled from "styled-components";

const SocialCard = ({item}) => {

    const openWebsite = (url) => {
        window.open('https://'+url);
    }
    return(
        <Container hover={item.hover} onClick={()=>openWebsite(item.url)} className="card">
            <Image src={item.img}/>
            <Content>
                <Description>{item.description}</Description>
                <Details>{item.url}</Details>
            </Content>
            
        </Container>
    )
}

const Container = styled.article`
    min-width: 280px;
    max-width: 678px;
    display: flex;
    gap: 10px;
    padding: 10px;
    flex: 1 0 0;
    border: 1.5px solid lightgray;
    border-radius: 6px;

    &:hover {
        cursor: pointer;
        border: 1.5px solid black;
        background: ${props => props.hover};

        div {
            span:nth-child(1) {
                color: black;
            }
      
            span:nth-child(2) {
                color: black;
                font-weight: 900;

            }
        }
    }
`;

const Image = styled.img`
    width: 80px;
    height: 80px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-direction: column;
`;

const Description = styled.span`
    font-size: 0.9rem;
    color: dimgray;
    text-align: left;
    align-self: start;
`;

const Details = styled.span`
    font-size: 0.8rem;
    font-size: 10px;
    font-weight: 600;
    text-align: left;
    color: grey;
    text-decoration: overline;
    text-decoration-thickness: from-font;
    text-decoration-style: wavy;
    text-decoration-color: black;
`


export default SocialCard;