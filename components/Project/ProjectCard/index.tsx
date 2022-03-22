import { useInView } from "react-intersection-observer"
import ProjectDetailModal from '../ProjectDetailModal';
import {useState} from 'react';
import { Wrapper } from "./styles";

type pageInfoType={
  url:string,
  desc:string
}

interface PropsType{
  pageInfo:pageInfoType[],
  year:string,
  name:string,
  stack:string[],
  github:string,
  demo:string,
}

//프로젝트 카드 컴포넌트
export default function ProjectCard({pageInfo,year,name,stack,github,demo}:PropsType) {
  const [modalShow,setModalShow]=useState(false);
  const {ref, inView, entry}=useInView({
    threshold:0,
  })

  const hideModal=()=>{
    setModalShow(false);
  }
  const showModal=()=>{
    setModalShow(true);
  }

  return (
    <Wrapper onClick={showModal} ref={ref} inView={inView}>
      {/* 프로젝트 대표 이미지 */}
      <div className="ProjectTitle">
        <img src={pageInfo[0].url} className="RepresentImage" />
        <label className="Year">{year}</label>
      </div>

      {/* 프로젝트 명 */}
      <div className="ProjectName">
        <b>{name}</b>
      </div>

      {/* 기술스택 */}
      <div className="StackInfo">
        {stack.map(stk=>(
          <div className="Stk" key={stk}>
            <label>{stk}</label>
          </div>
        ))}
      </div>

      <ProjectDetailModal show={modalShow} onHide={hideModal} pageInfo={pageInfo} year={year} name={name} github={github} demo={demo} />
    </Wrapper>
  )
}
