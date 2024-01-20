import styled from "styled-components";
import Tags from "../Tags";

const IMAGE_NOT_FOUND = 'No image found';
const PARAGRAPH_NOT_FOUND = 'No Paragraph found';
const isThereAnyElement = (elements) => elements.length > 0;
const getFirstImageFromImages = (images) => images[0].src;
const getFirstParagraphFromParagraphs = (paragraphs) => paragraphs[0].innerHTML;
const getTagElementsFromHTML = (element, tag) => element.getElementsByTagName(tag);
const setHtmlTextToHTML = (htmlText) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText;
    return tempDiv;
}
const getFirstImageUrl = (htmlText) => {
    const htmlElement = setHtmlTextToHTML(htmlText);
    const images = getTagElementsFromHTML(htmlElement, 'img');
    return isThereAnyElement(images) ? getFirstImageFromImages(images) : IMAGE_NOT_FOUND;
}



const getFirstParagraphText = (htmlText) => {
    const htmlElement = setHtmlTextToHTML(htmlText);
    const paragraphs = getTagElementsFromHTML(htmlElement, 'p');
    return isThereAnyElement(paragraphs) ? getFirstParagraphFromParagraphs(paragraphs) : PARAGRAPH_NOT_FOUND;
}

const Article = ({item}) => {
    const image = getFirstImageUrl(item.content);
    const paragraph = getFirstParagraphText(item.content);
    return (
        <Container className="article-container" onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}>
            {<Tags data={item.categories} />}
            <span title={item.title} id='title'>{item.title}</span>
            <div className="content-container">
                <div className="content">
                    
                    <span title={paragraph} id='description'>{paragraph.substring(0, 160)+'...'}</span>
                    <span id='details' open>{item.author}</span>
                </div>
                <div className="image-container">
                    {<img src={image} alt={item.title} />}
                </div>
            </div>
            
            
        </Container>
    )
};

const Container = styled.article`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 280px;
    border: 1.5px solid lightgray;
    border-radius: 8px;
    width: 300px;

    

    > #title {
        text-align: left;
        border-top: solid 1.5px lightgrey;
        align-items: center;
        font-weight: bold;
        background: white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 10px 10px;
    }
    
    cursor: pointer;

    .content-container {
        display: flex;
        
        border-radius: 0 0 8px 8px;
    }

    .content-container .content {
        display: flex;
        flex-direction: column;
        background: white;
        padding: 0 0 10px 0;
        border-radius: 0 0 0 8px;
        justify-content: space-around;
        gap: 5px;

        > span {
            text-align: left;
            padding: 0px 10px;
        }

        > #description{
            color: dimgray;
            padding: 0 10px 10px 10px;
        }

        > #details {
            font-size: 10px;
            font-weight: 600;
            color: grey;
            text-decoration: overline;
            text-decoration-thickness: from-font;
            text-decoration-style: wavy;
            text-decoration-color: black;
        }

    }

    .image-container {
        display: flex;
        background: white;
        border-radius: 0 0 8px 0px;

        img {
            align-self: center;
            width: 150px;
            height: 150px;
            object-fit: contain;
        }
    } 

`;

export default Article;