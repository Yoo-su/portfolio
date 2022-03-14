import Image from "next/image";
import memoticon from "../../public/images/memoticon.jpg"
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Wrapper, Profile, Description, Description2} from "./styles";

//첫 소개란 레이아웃 컴포넌트
export default function Introduction() {

  return (
    <Wrapper id="Introduction_Layout">
      <Profile>
        <Image 
          id="ProfileImg"
          objectFit="cover" 
          src={memoticon} />
      </Profile>

      <Description>
        <h1>안녕하세요, 유수현입니다</h1>
        <Description2>
          <p>
            <mark>도전</mark>
            을 두려워하지 않고,&nbsp;
            <mark>발전</mark>
            하기 위해 꾸준히 노력하는
            열정 가득한&nbsp;
            <mark>개발자</mark>입니다
          </p>
          
          <BsFillArrowDownCircleFill className="DownIcon" onClick={()=>{
            let navbar=document.getElementById("Navbar_topNavbar__iNiS9");
            if (!navbar){
              navbar=document.getElementById("Navbar_navbar__wU2Rq");
            }
            window.scrollTo({left:0, top:document.getElementById("BasicInfo_basicInfo__QOVle")?.offsetTop-navbar.clientHeight, behavior:'smooth'});
          }}/>
        </Description2>
      </Description>
    </Wrapper>
  )
}
