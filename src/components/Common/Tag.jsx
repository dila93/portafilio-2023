import styled from "styled-components";

const Tag = styled.span`
    background: ${({background}) => background ?? "white"};
    color: ${({color}) => color ? color : "black"};
    padding: 3px 8px;
    border: 1.5px solid ${props => props.bordercolor ? props.bordercolor : "black"};
    font-weight: 600;
    font-size: 11px;
    height: fit-content;
    border-radius: 5px;
`;

export default Tag;