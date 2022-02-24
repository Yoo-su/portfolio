import { useInView } from "react-intersection-observer"
import styles from "./Projects.module.css";
import {IoCodeWorkingSharp} from "react-icons/io5";
import ProjectCard from "../components/ProjectCard";
import myJson from "../lib/projectsInfo.json";

export default function Projects() {
    const {ref, inView, entry}=useInView({
        threshold:0,
    })
    const data=myJson.restaurantProject;
    const data2=myJson.welfare_project;
    return (
        <div id={styles.projects} ref={ref}>
            <div id={styles.title}>
                <IoCodeWorkingSharp className={styles.titleIcon} />
                <h1>
                    <span>Projects</span>
                </h1>
            </div>
            <div id={styles.content}>
                <ProjectCard pageInfo={data.pageInfo} year={data.year} name={data.name} stack={data.stack} />
                <ProjectCard pageInfo={data2.pageInfo} year={data2.year} name={data2.name} stack={data2.stack} />
            </div>
        </div>
    )
}
