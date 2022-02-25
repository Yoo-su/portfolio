import { useInView } from "react-intersection-observer"
import styles from "./Projects.module.css";
import {IoCodeWorkingSharp} from "react-icons/io5";
import ProjectCard from "../components/ProjectCard";
import myJson from "../lib/projectsInfo.json";

//내 프로젝트 경험 레이아웃
export default function Projects() {
    const {ref, inView, entry}=useInView({
        threshold:0,
    })

    const data=myJson.restaurantProject;
    const data2=myJson.welfare_project;
    const data3=myJson.portfolio;

    return (
        <div id={styles.projects} ref={ref}>
            <div id={styles.title}>
                <IoCodeWorkingSharp className={styles.titleIcon} />
                <h1>
                    <span>Projects</span>
                </h1>
            </div>
            <div id={inView===true?styles.content:styles.hiddenContent}>
                <ProjectCard pageInfo={data.pageInfo} year={data.year} name={data.name} stack={data.stack} github={data.github} demo={data.demo}/>
                <ProjectCard pageInfo={data2.pageInfo} year={data2.year} name={data2.name} stack={data2.stack} github={data.github} demo={data.demo}/>
                <ProjectCard pageInfo={data3.pageInfo} year={data3.year} name={data3.name} stack={data3.stack} github={data3.github} demo={data3.demo}/>
            </div>
        </div>
    )
}
