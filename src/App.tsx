import Header from './components/header';
import Splash from './pages/splash'
import Community from './pages/community';
import AboutMe from './pages/about_me';

function App() {

  return (
    <div className="Pages">
      <Header />
      <Splash />
      <Community />
      <AboutMe />
    </div>
  )
}

export default App
