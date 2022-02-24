import styles from "./MySkills.module.css";
import {FiTool} from "react-icons/fi";
import {SiTypescript, SiExpress, SiJavascript, SiReact, SiHtml5, SiCss3, SiCplusplus, SiPython, SiTailwindcss, SiRedux, SiMysql, SiC} from "react-icons/si"
import { useInView } from "react-intersection-observer";

const frontSkills=[
  {
    name:'HTML5',
    icon:()=>{return <SiHtml5 className={styles.skillIcon}  /> }
  },
  {
    name:'CSS3',
    icon:()=>{ return <SiCss3 className={styles.skillIcon} />}
  },
  {
    name:'React',
    icon:()=>{ return <SiReact className={styles.skillIcon} /> }
  },
  {
    name:'Tailwind CSS',
    icon:()=>{ return <SiTailwindcss className={styles.skillIcon} />}
  },
  {
    name:'redux',
    icon:()=>{return <SiRedux className={styles.skillIcon} />}
  },
  {
    name:'Javascript',
    icon:()=>{return <SiJavascript className={styles.skillIcon} />}
  },
  {
    name:'Typescript',
    icon:()=>{return <SiTypescript className={styles.skillIcon} />}
  }
]

const backSkills=[
  {
    name:'Express',
    icon:()=>{return <SiExpress className={styles.skillIcon} />}
  },
  {
    name:'MySQL',
    icon:()=>{return <SiMysql className={styles.skillIcon}/>}
  },
]

const languageSkills=[
  {
    name:'C',
    icon:()=>{return <SiC className={styles.skillIcon} />}
  },
  {
    name:'C++',
    icon:()=>{return <SiCplusplus className={styles.skillIcon}/>}
  },
  {
    name:'Python',
    icon:()=>{return <SiPython className={styles.skillIcon} />}
  },
]

export default function MySkills() {
  const {ref, inView, entry}=useInView({
    threshold:0,
  })
  return (
    <div id={styles.mySkills}>
      <div id={styles.title}>
        <FiTool className={styles.titleIcon} />
        <h1>
          <span>MY SKILLS</span>
        </h1>
      </div>
      <div id={styles.content} ref={ref}>
        <div id={inView===true?styles.frontend:styles.hide}>
          <div className={styles.contentTitle}>
            <label className={styles.domain}>Frontend</label>
          </div>
          <div className={styles.skills}>
            {frontSkills.map(s => (
              <div className={styles.skill} key={s.name}>
                {s.icon()}
                <label>{s.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div id={inView===true?styles.backend:styles.hide}>
          <div className={styles.contentTitle}>
            <label className={styles.domain}>Backend & DB</label>
          </div>
          <div className={styles.skills}>
            {backSkills.map(s => (
              <div className={styles.skill} key={s.name}>
                {s.icon()}
                <label>{s.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div id={inView===true?styles.languages:styles.hide}>
          <div className={styles.contentTitle}>
            <label className={styles.domain}>Languages</label>
          </div>
          <div className={styles.skills}>
            {languageSkills.map(s => (
              <div className={styles.skill} key={s.name}>
                {s.icon()}
                <label>{s.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
