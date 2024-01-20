import Article from './Article';
import Title from '../Common/Title';
import styled from 'styled-components';

const Articles = ({data}) => {
    return (
        <>
            <Title>PUBLICATIONS</Title>
            <Publications role="publications">
                {
                    data.map((item, index) => {
                        return <Article key={index} item={item}></Article>
                    })
                }
                
            </Publications>
        </>
    )
};


const Publications = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
    flex-wrap: wrap;

    .article-container:hover{
        border: 1.5px solid black;
    }
`

export default Articles;