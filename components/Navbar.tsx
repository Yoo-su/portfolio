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
            document.getElementById('Introduction_introduction__631rt')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}>YSH&apos;s portfolio</b>
        </div>
        <div id={styles.nav_right}>
          <label onClick={()=>{
            const navbarId=pos==="top"?"Navbar_topNavbar__iNiS9":"Navbar_navbar__wU2Rq";
            window.scrollTo({left:0, top:document.getElementById("BasicInfo_basicInfo__QOVle")?.offsetTop-document.getElementById(navbarId)?.clientHeight,behavior:'smooth'})
            
          }}>About Me</label>
          <label onClick={()=>{
            const navbarId=pos==="top"?"Navbar_topNavbar__iNiS9":"Navbar_navbar__wU2Rq";
            window.scrollTo({left:0, top:document.getElementById("MySkills_mySkills__3Bbdb")?.offsetTop-document.getElementById(navbarId)?.clientHeight,behavior:'smooth'})
          }}>Skills</label>
          <label onClick={()=>{
             const navbarId=pos==="top"?"Navbar_topNavbar__iNiS9":"Navbar_navbar__wU2Rq";
             window.scrollTo({left:0, top:document.getElementById("Projects_projects__1Yfie")?.offsetTop-document.getElementById(navbarId)?.clientHeight,behavior:'smooth'})
          }}>Projects</label>
        </div>
    </div>
  )
}
