import styled,{keyframes, css} from 'styled-components';

const slide=keyframes`
    from{
        opacity:0;
        transform:translateX(-10%) translateY(20%);
        
    }
    to{
        opacity:1;
        transform:translateX(0) translateY(0);
    }
`;

interface Props{
    inView:boolean,
    duration:string
}

export const Content=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin-top:2rem;
    overflow:hidden;

    @media all and (min-width:0px) and (max-width:720px){
        flex-direction:column;
        padding:0 3rem;
        flex-wrap:nowrap;
        margin-top:0.5rem;
    }
`;

const cssStyle=css`
    animation:${slide};
`;
export const Domain=styled.div<Props>`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    ${props=>props.inView===true && cssStyle};
    animation-duration:${props=>props.duration};
    visibility:${props=>props.inView===true?'visible':'hidden'};

    & .ContentTitle{
        font-size:1.5rem;
    }

    @media all and (min-width:0px) and (max-width:720px){
        margin:1rem 0;
    }
`;


export const Skills=styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    border-radius:1rem;
    border:none;
    background:#2A2929;
    min-height:18rem;
    min-width:10rem;
    padding:1rem 1rem;
    margin:0 3rem;

    @media all and (min-width:0px) and (max-width:720px){
        font-size:0.7rem;
        margin:0 0;
        min-height:0;
        min-width:0;
    }
`;

export const Skill=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0.5rem 1rem;

    & .SkillIcon{
        width:3rem;
        height:3rem;
    }

    @media all and (min-width:0px) and (max-width:720px){
        & .SkillIcon{
            width:2rem;
            height:2rem;
        }
    }
`;