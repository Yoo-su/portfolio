import { useState, useEffect } from "react";
import { Wrapper } from "./styles";

//네이게이션 바 컴포넌트
export default function Navbar() {
  const [pos,setPos]=useState("top");
  
  useEffect(()=>{
    document.addEventListener("scroll", e => {
      let scrolled = document.documentElement.scrollTop;
      if (scrolled >= 100){
         setPos("moved")
      } else {
         setPos("top")
      }
  })

  })
  return (
    <Wrapper pos={pos} id="Navbar">
        <div id="NavLeft">
          <b onClick={()=>{
            document.getElementById("Introduction_Layout")?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}>YSH&apos;s portfolio</b>
        </div>
        <div id="NavRight">
          <label onClick={()=>{
            window.scrollTo({left:0, top:document.getElementById("Basicinfo_Layout")?.offsetTop-document.getElementById("Navbar")?.clientHeight,behavior:'smooth'});
          }}>AboutMe</label>
          <label onClick={()=>{
            window.scrollTo({left:0, top:document.getElementById("Skills_Layout")?.offsetTop-document.getElementById("Navbar")?.clientHeight,behavior:'smooth'})
          }}>Skills</label>
          <label onClick={()=>{
             window.scrollTo({left:0, top:document.getElementById("Projects_Layout")?.offsetTop-document.getElementById("Navbar")?.clientHeight,behavior:'smooth'})
          }}>Projects</label>
        </div>
    </Wrapper>
  )
}
