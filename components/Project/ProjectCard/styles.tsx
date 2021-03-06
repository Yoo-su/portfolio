import styled, {keyframes, css} from "styled-components";

interface Props{
    inView:boolean
}

const fadein=keyframes`
    from{
        opacity:0;
        transform:translateY(10%);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
`;

const cssStyle=css`
    animation:${fadein} 3s;
`;

export const Wrapper=styled.div<Props>`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:#FAFDEC;
    padding:10px 10px 5px;
    font-family: 'Open Sans Condensed', sans-serif;
    -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    cursor:pointer;
    flex-basis:24rem;
    transition: all .20s linear;
    margin-bottom:2.5rem;
    position:relative;
    ${props=>props.inView===true && cssStyle};
    visibility:${props=>props.inView===true?'visible':'hidden'};

    &:hover{
        transform:scale(1.01);
        -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
        -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
        box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
    }

    & .ProjectTitle{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    & .Year{
        position:relative;
        letter-spacing:1px;
        color:white;
        padding:0.3rem 0.5rem;
        top:0;
        background:#696969;
        border-radius:0 0 0.25rem 0.25rem;
    }

    & .RepresentImage{
        width:100%;
        object-fit:cover;
    }

    & .ProjectName{
        font-family: 'IBM Plex Sans KR', sans-serif;
        font-size:1.2rem;
        white-space:nowrap;
        margin:0.5rem 0;
    }
    & .StackInfo{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
    }

    & .Stk{
        background:#2DAADB;
        color:#fff;
        margin:0.1rem 0.2rem;
        padding:0.2rem 0.3rem;
        border-radius:0.5rem;
        border:none;
        font-weight:bold;
    }

    @media all and (min-width:0px) and (max-width:720px){
        margin-bottom:3rem;
    }
`;