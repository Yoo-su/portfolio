import Head from 'next/head'
import Introduction from '../layouts/Introduction';
import BasicInfo from '../layouts/BasicInfo';
import Navbar from '../components/Navbar';
import MySkills from '../layouts/Skills';
import Projects from '../layouts/Projects';
import { VscGithub } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>유수현의 포트폴리오</title>

      </Head>

      <main>
        <Navbar />
        <Introduction />
        <BasicInfo />
        <MySkills />
        <Projects />
      </main>

      <footer>
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", background: '#000', color: 'white' }}>
          <VscGithub style={{ width: "2rem", height: "2rem", margin: "1.2rem 0", cursor: "pointer" }}
            onClick={() => {
              window.open("https://github.com/Yoo-su");
            }}
          />
        </div>
      </footer>
    </div>
  )
}
