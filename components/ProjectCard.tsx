import styles from "./ProjectCard.module.css";
import ProjectDetailModal from "./ProjectDetailModal";
import {useState} from 'react';

type pageInfoType={
  url:string,
  desc:string
}

interface PropsType{
  pageInfo:pageInfoType[],
  year:string,
  name:string,
  stack:string[],
}

//프로젝트 카드 컴포넌트
export default function ProjectCard({pageInfo,year,name,stack}:PropsType) {
  const [modalShow,setModalShow]=useState(false);

  const hideModal=()=>{
    setModalShow(false);
  }
  const showModal=()=>{
    setModalShow(true);
  }

  return (
    <div className={styles.projectCard} onClick={showModal}>
      {/* 프로젝트 대표 이미지 */}
      <div className={styles.projectTitle}>
        <img src={pageInfo[0].url} className={styles.representImage}/>
        <label className={styles.year}>{year}</label>
      </div>

      {/* 프로젝트 명 */}
      <div className={styles.projectName}>
        <b>{name}</b>
      </div>

      {/* 기술스택 */}
      <div className={styles.stackInfo}>
        {stack.map(stk=>(
          <div className={styles.stk} key={stk}>
            <label>{stk}</label>
          </div>
        ))}
      </div>

      <ProjectDetailModal show={modalShow} onHide={hideModal} pageInfo={pageInfo} year={year} name={name} />
    </div>
  )
}
