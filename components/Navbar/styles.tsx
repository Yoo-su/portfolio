import styled from "styled-components";

interface Props{
    pos:string
}

export const Wrapper = styled.div<Props>`
    display:flex;
    flex-direction:row;
    position:fixed;
    top:0;
    z-index:50;
    color:#2B2B2B;
    justify-content:space-between;
    width:${({ pos }) => (pos === "top" ? "80%" : "100%")};
    font-family: 'Noto Sans KR', sans-serif;
    height:4rem;
    background:${({ pos }) => (pos === "top" ? "transparent" : "#fff")};
    box-shadow:${({ pos }) => (pos === "top" ? "0 1px hsl(0deg 0% 80% / 80%)" : "0 1px hsl(0deg 0% 80% / 80%)")};

    #NavLeft{
        display:flex;
        flex-direction:row;
        align-items:center;
        font-size:32px;
        width:100%;
        opacity:${({ pos }) => (pos === "top" ? "0.7" : "1")};
        padding-left:${({ pos }) => (pos === 'top' ? '0' : '9.5rem')};

        & > b {
            cursor:pointer;
        }
    }

    #NavRight{
        display:flex;
        flex-direction:row;
        align-items:center;
        font-size:24px;
        opacity:0.7;
        opacity:${({pos})=>(pos==="top"?"0.7":"1")};
        padding-right:${({pos})=>(pos==='top'?'0':'9.5rem')};

        & label{
            margin-left:2rem;
            cursor:pointer;
            text-decoration: none;
        }
    
        & label::after{
            content: '';
            display: block;
            width: 0;
            height: 4px;
            background: #607D3B;
            transition: width .3s;
        }
    
        & label:hover::after{
            width:100%;
        }
    }

    @media all and (min-width:0px) and (max-width:980px){
        width:100%;
        height:2.5rem;
        justify-content:flex-start;

        #NavLeft{
            padding-left:0.5rem;
            font-size:1.2rem;
        }

        #NavRight{
            display:none;
        }
    }
`;
