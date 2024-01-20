import styled from "styled-components";
import Tag from "../Common/Tag";

const colors = [
    '#4eb3dea3',
    '#8de0a6',
    '#fcf09f',
    '#f27c7cb5',
    '#33dd016e',
    '#5bbbe8',
    '#9decb0',
    '#fdf2a5',
    '#f58b8d',
    '#e65c9d',
]
const getItemParsed = (item) => {
    if(item.length > 7){
        return item.substring(0, 7)+'...'
    }else{
        return item;
    }
}

const getItems = (data) => {
    return data.slice(0,4);
}

const Tags = ({data}) => {
    const dataSilced = getItems(data)
    return (
        <Container role="tags" aria-label="Article Tags">
            {
                dataSilced.map((item, index) => {
                    return (
                        <Tag title={item} key={index} background={colors[index]}>
                            {getItemParsed(item.toUpperCase())}
                        </Tag>
                    );
                })
            }
            { data.length >= 4 ?<Tag title={data} background={'white'}>SEE MORE 👁️</Tag>: null}
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    background: white;
    border-radius: 8px 8px 0 0;
`;



export default Tags;