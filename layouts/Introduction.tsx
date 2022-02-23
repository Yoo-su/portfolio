import Image from "next/image";
import styles from "./introduction.module.css";
import memoticon from "../public/images/memoticon.jpg"
import { BsFillArrowDownCircleFill } from "react-icons/bs";
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
            뭔가를&nbsp;
            <mark>만드는 것</mark>
            과
            새로운 것을&nbsp;
            <mark>배우는 것</mark>
            을 좋아하는&nbsp;
            <mark>프론트엔드 개발자</mark>&nbsp; 입니다
          </p>
          <BsFillArrowDownCircleFill className={styles.icon} />
        </div>
      </div>
    </div>
  )
}
