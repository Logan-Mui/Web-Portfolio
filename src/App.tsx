import Header from './components/header';
import Splash from './pages/splash'
import Community from './pages/community';
import AboutMe from './pages/about_me';

function App() {

  return (
    <>
      <Header />
      <div className="Pages">
        <Splash />
        <Community />
        <AboutMe />
      </div>
    </>
  )
}

export default App
