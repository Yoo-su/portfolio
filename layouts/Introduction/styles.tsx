import styled, {keyframes} from 'styled-components';

const fadein=keyframes`
    from {
        opacity: 0;
        transform: translateY(-15%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const bounce=keyframes`
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-5px); }
    100% { transform: translateY(0); }
`;

export const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    color:#607D3B;
    width:100%;
    height:100vh;
    background-image:url("/images/intro_bg.jpg");
    object-fit:contain;
    font-family: 'Poppins', sans-serif;

    @media all and (min-width:0px) and (max-width:720px){
        flex-direction:column;
        height:100%;
        padding-top:5rem;
        padding-bottom:2rem;
    }
`;

export const Profile=styled.div`
    width:15rem;
    height:15rem;
    border:2px solid white;
    padding: 1rem;
    margin-right:1rem;
    border-radius:50%;
    animation:${fadein} 2s;
    & #ProfileImg{
        border-radius:50%;
    }
`;

export const Description=styled.div`
    display:block;
    text-align:left;
    animation:${fadein} 2.5s;

    & > h1{
        margin:1rem 0;
        font-size:4rem;
        font-weight:bold;
    }

    @media all and (min-width:0px) and (max-width:720px){
        text-align:center;
        padding:0 1rem;

        & >h1{
            font-size:1.5rem;
        }
    }
`;

export const Description2=styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    animation:${fadein} 2.5s;

    & > p{
        color:#2B2B2B;
        margin:1rem 0rem;
        padding-left:0.5rem;
        font-size:1.3rem;
        font-weight:600;
    }

    & > p mark{
        background:#708A4F;
        color:white;
        padding:0 .2rem;
    }

    & > .DownIcon{
        margin-left:1rem;
        width:3rem;
        height:3rem;
        opacity:0.6;
        cursor:pointer;
        animation:${bounce};
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function:ease;
    }

    & > .DownIcon:hover{
        transform:scale(1.1);
        transition:transform 0.1s ease-in-out;
        opacity:0.9;
    }

    @media all and (min-width:0px) and (max-width:720px){
        justify-content:center;

        & > p{
            font-size:1rem;
        }
    }
`;