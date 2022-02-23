import Head from 'next/head'
import Image from 'next/image'
import Introduction from '../layouts/Introduction';
import BasicInfo from '../layouts/BasicInfo';
import Navbar from '../components/Navbar';
import styles from  "../styles/index.module.css";
import MySkills from '../layouts/MySkills';
import Projects from '../layouts/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div >
      <Head>
        <title>유수현의 포트폴리오</title>

      </Head>

      <main id={styles.main}> 
          <Navbar />
          <Introduction />
          <BasicInfo />
          <MySkills />
          <Projects />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
