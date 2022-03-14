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

export const Content=styled.div<Props>`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    margin-top:2rem;
    height:100%;
    width:80%;
    ${props=>props.inView===true && cssStyle};
    visibility:${props=>props.inView===true?'visible':'hidden'};

    @media all and (min-width:0px) and (max-width:720px){
        margin-top:0.5rem;
        justify-content:center;
    }
`;