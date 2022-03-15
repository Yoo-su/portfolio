import styled from "styled-components";

export const Wrapper=styled.div`
`;

export const ModalHeader=styled.div`
    margin-left:auto;

    & > .CloseIcon{
        margin-top:0.5rem;
        margin-right:0.5rem;
        margin-bottom:-0.5rem;
        width:1.5rem;
        height:1.5rem;
        cursor:pointer;
    }
`;


export const SliderContent=styled.div`
    width:100%;
    padding:2rem 1rem;

    & img{
        object-fit:contain;
    }

    & .aws_btn{
        --slider-height-percentage: 70%;
        --slider-transition-duration: 1000ms;
        --organic-arrow-thickness: 15px;
        --organic-arrow-border-radius: 20px;
        --organic-arrow-height: 40px;
        --organic-arrow-color: #141b24;
        --control-button-width: 10%;
        --control-button-height: 25%;
        --control-button-background: transparent;
        --control-bullet-color: #2d5182;
        --control-bullet-active-color: #26456f;
        --loader-bar-color: #851515;
        --loader-bar-height: 6px;
    }

    @media all and (min-width:0px) and (max-width:720px){
        padding:1rem 2rem;
    }
`;

export const WindowTab=styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:center;
    bottom:0;
    background:#36383A;
    height:1.2rem;
    padding:0.1rem 0.3rem;

    & .redCircle, .yellowCircle, .greenCircle{
        border-radius:100%;
        border:none;
        margin:0.1rem 0.2rem;
        width:0.5rem;
        min-height:0.5rem;
    }

    & .redCircle{
        background:#FF5F56;
    }
    & .yellowCircle{
        background:#FDBB2F;
    }
    & .greenCircle{
        background:#27C93F;
    }
`;

export const ProjectDesc=styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin:2rem 1rem;
    font-family: 'IBM Plex Sans KR', sans-serif;
`;

export const BottomIcons=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    & .githubIcon, .browserIcon{
        cursor:pointer;
        margin:0.5rem 1rem;
        width:1.5rem;
        height:1.5rem;
    }

    & .githubIcon:hover, .browserIcon:hover{
        transform:scale(1.1);
        transition:transform 0.2s linear;
    }
`;