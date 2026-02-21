import Header from './components/header';
import dynamic from 'next/dynamic';

const Splash = dynamic(() => import('./@pages/splash'), {ssr: false});
const AboutMe = dynamic(() => import('./@pages/about_me'), {ssr: false});
const Community = dynamic(() => import('./@pages/community'), { ssr: false });
const WorkCv = dynamic(() => import('./@pages/work_cv'), { ssr: false });
const Projects = dynamic(() => import('./@pages/projects'), { ssr: false });

function App() {
  return (
    <>
      <Header />
      <Splash />
      <Community />
      <AboutMe />
      <WorkCv />
      <Projects />
    </>
  )
}

export default App
