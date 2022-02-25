import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

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
    <div id={pos==="top"?styles.topNavbar:styles.navbar}>
        <div id={styles.nav_left}>
          <b onClick={()=>{
            document.getElementById('introduction_introduction__MxUUU')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}>YSH&apos;s portfolio</b>
        </div>
        <div id={styles.nav_right}>
          <label onClick={()=>{
            //window.scroll({top:(document.getElementById("BasicInfo_basicInfo__QOVle")?.offsetTop-60),left:0,behavior:'smooth'});
          }}>About Me</label>
          <label onClick={()=>{
            //window.scroll({top:(document.getElementById("MySkills_mySkills__3Bbdb")?.offsetTop-60),left:0, behavior:'smooth'});
          }}>Skills</label>
          <label>Projects</label>
        </div>
    </div>
  )
}
