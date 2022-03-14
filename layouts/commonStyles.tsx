import styled from 'styled-components';

interface wrapperProps{
    bgColor:string,
    color:string
}

interface titleProps{
    color:string,
    iconColor:string
}

export const Wrapper=styled.div<wrapperProps>`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    overflow:hidden;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    padding:6rem 4rem;
    background:${props=>props.bgColor};
    color:${props=>props.color};
    font-family: 'Open Sans Condensed', sans-serif;

    @media all and (min-width:0px) and (max-width:780px){
        padding:3rem 0;
    }
`;

export const Title=styled.div<titleProps>`
    display:flex;
    letter-spacing:3px;
    color:${props=>props.color};

    & .TitleIcon{
        color:${props=>props.iconColor};
        opacity:0.6;
        width:3.5rem;
        height:3.5rem;
        cursor:pointer;
    }
    & .TitleIcon:hover{
        opacity:1;
    }
`;