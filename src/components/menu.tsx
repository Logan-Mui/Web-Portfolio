import pork from "../assets/photos/pork.jpg";
import "../styles/splash/menu.css";

function Menu() {

  return (
    <>
      <div className="SplashMenu">
          <a href="">COMMUNITY</a>
          <a href="">ABOUT ME</a>
          <a href="">WORK/CV</a>
          <a href="">PROJECTS</a>
      </div>
      <div className="PicOfMe">
          <img src={pork}></img>
      </div>
    </>
  )
}

export default Menu;