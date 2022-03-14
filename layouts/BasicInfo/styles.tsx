import styled, {keyframes,css} from "styled-components";

interface Props{
    inView:boolean
}

const appear=keyframes`
    from {
        opacity: 0;
        transform: translateX(5%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Content=styled.div`
    background:white;
    border:none;
    width:100%;
    height:100%;
    border-radius:2rem;
    margin-top:2rem;
    padding:1rem 4rem;

    @media all and (min-width:0px) and (max-width:780px){
        padding:1.5rem 0;
        margin-top:0;
    }
`;

const cssStyle=css`
    animation:${appear} 2s;
`;
export const BoxContainer=styled.div<Props>`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    height:100%;
    font-family: 'IBM Plex Sans KR', sans-serif;
    visibility:${props=>props.inView===true?'visible':'hidden'};
    ${props=>props.inView===true && cssStyle};
`;

export const InfoBox=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0 4px 5px rgba(0, 0, 0, .3);
    padding:1rem 2rem;
    margin:0.5rem 2rem;
    width:20rem;
    background:#F9F9F3;
    border-radius:0.4rem;
    transition:transform 0.1s linear;

    &:hover{
        transform:scale(1.1);
    }

    & .InfoIcon{
        width:3rem;
        height:3rem;
        margin-right:1rem;
        color:#607D3B;
        opacity:0.9;
    }

    @media all and (min-width:0px) and (max-width:780px){
        padding:0.3rem 0.5rem;
        width:15rem;
        justify-content:center;

        & .InfoIcon{
            width:2rem;
            height:2rem;
        }
    }
`;

export const BoxContent=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:1rem;
`;
