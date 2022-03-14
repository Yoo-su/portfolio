import { useInView } from "react-intersection-observer";
import { HiUser,HiCalendar,HiLocationMarker,HiPhone,HiMail,HiPencil } from "react-icons/hi";
import { ImLeaf } from "react-icons/im";
import { Wrapper, Title } from "../commonStyles";
import { Content, BoxContainer, InfoBox, BoxContent } from "./styles";

//기본정보 레이아웃
export default function BasicInfo() {
  const {ref, inView, entry}=useInView({
    threshold:0,
  })
  const data=[
    {
      icon:()=>{ return <HiUser className="InfoIcon" /> },
      key:"이름",
      value:"유수현"
    },
    {
      icon:()=>{ return <HiCalendar className="InfoIcon" />},
      key:"생년월일",
      value:"96.04.24"
    },
    {
      icon:()=>{return <HiLocationMarker className="InfoIcon" />},
      key:"주소",
      value:"서울특별시 서대문구"
    },
    {
      icon:()=>{return <HiPhone className="InfoIcon" />},
      key:"연락처",
      value:"010-4755-0871"
    },
    {
      icon:()=>{return <HiMail className="InfoIcon" />},
      key:"이메일",
      value:"rhan0871@naver.com"
    },
    {
      icon:()=>{return <HiPencil className="InfoIcon" />},
      key:"학력",
      value:"동국대학교(컴퓨터공학)"
    }
  ]
  
  return (
    <Wrapper bgColor="#fff" color="black" id="Basicinfo_Layout">
      <Title color="black" iconColor="#607D3B">
        <h1>
          <ImLeaf className="TitleIcon" />
          <span onClick={()=>{console.log(inView)}}>ABOUT ME</span>
        </h1>
      </Title>
      <Content ref={ref}>
        <BoxContainer inView={inView}>
          {data.map(d=>(
            <InfoBox key={d.key}>
              {d.icon()}
              <BoxContent>
                <b>{d.key}</b>
                <label>{d.value}</label>
              </BoxContent>
            </InfoBox>
          ))}
        </BoxContainer>
      </Content>
    </Wrapper>
  )
}
