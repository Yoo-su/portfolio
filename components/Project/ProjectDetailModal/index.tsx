import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import { Modal } from "react-bootstrap"
import { AiOutlineClose } from 'react-icons/ai';
import { GoBrowser } from "react-icons/go";
import { SiGithub} from 'react-icons/si';
import { Wrapper, ModalHeader, SliderContent, WindowTab, ProjectDesc, BottomIcons} from './styles';

type pageInfoType={
    url:string,
    desc:string
}

interface propsType {
    show: boolean,
    pageInfo: pageInfoType[],
    year: string,
    name: string,
    github:string,
    demo:string,
    onHide: any
}

//프로젝트 상세정보 모달 컴포넌트
export default function ProjectDetailModal({ show, pageInfo, year, name, github, demo, onHide }: propsType) {
    return (
        <Wrapper onClick={e => e.stopPropagation()}>
        <Modal className="ProjectDetailModal" show={show} onHide={onHide} size="lg" centered>
            <ModalHeader>
                <AiOutlineClose className="CloseIcon" onClick={onHide} />
            </ModalHeader>

            <SliderContent>
                <WindowTab>
                    <div className="redCircle"></div>
                    <div className="yellowCircle"></div>
                    <div className="greenCircle"></div>
                </WindowTab>
                <AwesomeSlider
                    className="aws_btn"
                    animation="scaleOutAnimation"
                >
                    {pageInfo.map(info => (
                        <div data-src={info.url} key={info.url} />
                    ))}
                </AwesomeSlider>
            </SliderContent>
                <ProjectDesc>
                    <b>{name}</b>
                    <label>{pageInfo[0].desc}</label>
                    <BottomIcons>
                        <SiGithub className="githubIcon" onClick={() => {
                            window.open(github);
                        }} />
                        <GoBrowser className="browserIcon" onClick={() => {
                            window.open(demo);
                        }} />
                    </BottomIcons>
                </ProjectDesc>
        </Modal>
        </Wrapper>
    )
}
