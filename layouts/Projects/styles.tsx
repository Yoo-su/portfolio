import styled from "styled-components";

export const Content=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    margin-top:2rem;
    height:100%;
    width:80%;

    @media all and (min-width:0px) and (max-width:720px){
        margin-top:0.5rem;
        justify-content:center;
    }
`;