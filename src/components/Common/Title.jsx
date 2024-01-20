import styled from "styled-components";

export const Header = styled.h1`
    margin: 0;
    text-transform: uppercase;
    background: linear-gradient(217deg,#c1e6ea,#a39191 70.71%),linear-gradient(127deg,rgba(180,238,209,.8),#21e080 70.71%),linear-gradient(336deg,hsla(0,49%,65%,.59),#df1373 70.71%);
    -webkit-background-clip: text;
    font-family: arial;
    font-size: 4vmax;
    font-weight: 900;
    color: ${props => props.color};
    text-align: left;
`;

const Title = styled.h1`
    font-family: system-ui;
    font-size: 30pt;
    -webkit-text-fill-color: white;
    -webkit-text-stroke: 1.5px;
    font-weight: 900;
`;

export default Title;