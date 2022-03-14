import styles from "./MySkills.module.css";
import {FiTool} from "react-icons/fi";
import {SiTypescript, SiExpress, SiJavascript, SiReact, SiHtml5, SiCss3, SiCplusplus, SiPython, SiTailwindcss, SiRedux, SiMysql, SiC} from "react-icons/si"
import { useInView } from "react-intersection-observer";
import { Wrapper, Title } from '../commonStyles';
import { Content, Domain, Skills, Skill} from "./styles";

const frontSkills=[
  {
    name:'HTML5',
    icon:()=>{return <SiHtml5 className="SkillIcon"  /> }
  },
  {
    name:'CSS3',
    icon:()=>{ return <SiCss3 className="SkillIcon" />}
  },
  {
    name:'React',
    icon:()=>{ return <SiReact className="SkillIcon" /> }
  },
  {
    name:'Tailwind CSS',
    icon:()=>{ return <SiTailwindcss className="SkillIcon" />}
  },
  {
    name:'redux',
    icon:()=>{return <SiRedux className="SkillIcon" />}
  },
  {
    name:'Javascript',
    icon:()=>{return <SiJavascript className="SkillIcon" />}
  },
  {
    name:'Typescript',
    icon:()=>{return <SiTypescript className="SkillIcon" />}
  }
]

const backSkills=[
  {
    name:'Express',
    icon:()=>{return <SiExpress className="SkillIcon" />}
  },
  {
    name:'MySQL',
    icon:()=>{return <SiMysql className="SkillIcon"/>}
  },
]

const languageSkills=[
  {
    name:'C',
    icon:()=>{return <SiC className="SkillIcon" />}
  },
  {
    name:'C++',
    icon:()=>{return <SiCplusplus className="SkillIcon"/>}
  },
  {
    name:'Python',
    icon:()=>{return <SiPython className="SkillIcon" />}
  },
]

//나의 스킬정보 레이아웃
export default function MySkills() {
  const {ref, inView, entry}=useInView({
    threshold:0,
  })
  return (
    <Wrapper bgColor="#000000" color="#fff" id="Skills_Layout">
      <Title color="#fff" iconColor="#ffff99">
        <FiTool className="TitleIcon" />
        <h1>
          <span>MY SKILLS</span>
        </h1>
      </Title>
      <Content ref={ref}>
        <Domain inView={inView} duration="2.5s">
          <div className="ContentTitle">
            <label>Frontend</label>
          </div>
          <Skills>
            {frontSkills.map(s => (
              <Skill key={s.name}>
                {s.icon()}
                <label>{s.name}</label>
              </Skill>
            ))}
          </Skills>
        </Domain>

        <Domain inView={inView} duration="3.5s">
          <div className="ContentTitle">
            <label>Backend & DB</label>
          </div>
          <Skills>
            {backSkills.map(s => (
              <Skill key={s.name}>
                {s.icon()}
                <label>{s.name}</label>
              </Skill>
            ))}
          </Skills>
        </Domain>

        <Domain inView={inView} duration="3.5s">
          <div className="ContentTitle">
            <label>Languages</label>
          </div>
          <Skills>
            {languageSkills.map(s => (
              <Skill key={s.name}>
                {s.icon()}
                <label>{s.name}</label>
              </Skill>
            ))}
          </Skills>
        </Domain>
      </Content>
    </Wrapper>
  )
}
