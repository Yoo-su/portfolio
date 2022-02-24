import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import { Modal } from "react-bootstrap"
import { AiOutlineClose } from 'react-icons/ai';
import styles from "./ProjectDetailModal.module.css";

type pageInfoType={
    url:string,
    desc:string
}

interface propsType {
    show: boolean,
    pageInfo: pageInfoType[],
    year: string,
    name: string,
    onHide: any
}

//프로젝트 상세정보 모달 컴포넌트
export default function ProjectDetailModal({ show, pageInfo, year, name, onHide }: propsType) {
    return (
        <div onClick={e => e.stopPropagation()}>
        <Modal className={styles.projectDetailModal} show={show} onHide={onHide} size="lg" centered>
            <span className={styles.modalHeader}>
                <AiOutlineClose className={styles.closeIcon} onClick={onHide} />
            </span>

            <div className={styles.sliderContent}>
                <div className={styles.topTab}>
                    <div className={styles.redCircle}></div>
                    <div className={styles.yellowCircle}></div>
                    <div className={styles.greenCircle}></div>
                </div>
                <AwesomeSlider
                    className={styles.aws_btn}
                    animation="scaleOutAnimation"
                >
                    {pageInfo.map(info => (
                        <div data-src={info.url} key={info.url} />
                    ))}
                </AwesomeSlider>
            </div>
            <div className={styles.projectDesc}>
                <b>{name}</b>
                <label>{pageInfo[0].desc}</label>
            </div>
        </Modal>
        </div>
    )
}
