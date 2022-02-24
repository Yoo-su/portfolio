import styles from "./BasicInfo.module.css";
import { useInView } from "react-intersection-observer";
import { HiUser,HiCalendar,HiLocationMarker,HiPhone,HiMail,HiPencil } from "react-icons/hi";
import { ImLeaf } from "react-icons/im";

//기본정보 레이아웃
export default function BasicInfo() {
  const {ref, inView, entry}=useInView({
    threshold:0,
  })
  const data=[
    {
      icon:()=>{ return <HiUser className={styles.icon} /> },
      key:"이름",
      value:"유수현"
    },
    {
      icon:()=>{ return <HiCalendar className={styles.icon} />},
      key:"생년월일",
      value:"96.04.24"
    },
    {
      icon:()=>{return <HiLocationMarker className={styles.icon} />},
      key:"주소",
      value:"서울특별시 서대문구"
    },
    {
      icon:()=>{return <HiPhone className={styles.icon} />},
      key:"연락처",
      value:"010-4755-0871"
    },
    {
      icon:()=>{return <HiMail className={styles.icon} />},
      key:"이메일",
      value:"rhan0871@naver.com"
    },
    {
      icon:()=>{return <HiPencil className={styles.icon} />},
      key:"학력",
      value:"동국대학교(컴퓨터공학)"
    }
  ]
  
  return (
    <div id={styles.basicInfo}>
      <div id={styles.title}>
        <h1>
          <ImLeaf className={styles.titleIcon}/>
          <span onClick={()=>{console.log(inView)}}>ABOUT ME</span>
        </h1>
      </div>
      <div id={styles.content} ref={ref}>
        <div className={inView===true?styles.boxesContainer:styles.hiddenContainer}>
          {data.map(d=>(
            <div key={d.key} className={styles.infoBox}>
              {d.icon()}
              <div className={styles.boxContent}>
                <b>{d.key}</b>
                <label>{d.value}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
