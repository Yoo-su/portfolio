import Image from "next/image";
import styles from "./Introduction.module.css";
import memoticon from "../public/images/memoticon.jpg"
import { BsFillArrowDownCircleFill } from "react-icons/bs";

//첫 소개란 레이아웃
export default function Introduction() {
  return (
    <div id={styles.introduction}>
      <div id={styles.profile}>
        <Image 
          id={styles.profileImg}
          objectFit="cover" 
          src={memoticon} />
      </div>

      <div id={styles.description}>
        <h1>안녕하세요, 유수현입니다</h1>
        <div className={styles.desc_2}>
          <p>
            <mark>도전</mark>
            을 두려워하지 않고&nbsp;
            <mark>발전</mark>
            하기 위해 꾸준히 노력하는&nbsp;
            <mark>주니어 개발자</mark>입니다
          </p>
          <BsFillArrowDownCircleFill className={styles.icon} />
        </div>
      </div>
    </div>
  )
}
