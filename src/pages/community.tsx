import Marquee_Collection from "../components/marquee";
import VerticalCarousel from "../components/carousel";
import photo1 from "../../public/photos/DSC03342.jpg";
import photo2 from "../../public/photos/DSC03412.jpg";
import photo3 from "../../public/photos/IMG_4868.jpg";
import photo4 from "../../public/photos/IMG_4889.jpg";
import photo5 from "../../public/photos/DSC04002.jpg";
import "../styles/community/community.css";
import "../styles/community/marquee.css";

const slides = [
  {id: 1, content: (
    <div className="slide-content">
      <img src={photo1} alt="Slide 1" />
      <a href="https://8beat.org/" target="_blank" rel="noopener noreferrer">
        <h2>8 Beat Measure</h2>
      </a>
    </div>
  )},
  {id: 2, content: (
    <div className="slide-content">
      <img src={photo2} alt="Slide 1" />
      <a href="https://refugeworldwide.com/" target="_blank" rel="noopener noreferrer">
        <h2>Refuge Worldwide</h2>
      </a>
    </div>
  )},
  {id: 3, content: (
    <div className="slide-content">
      <img src={photo3} alt="Slide 1" />
      <a href="https://www.astrarium.games/" target="_blank" rel="noopener noreferrer">
        <h2>Astrarium Games</h2>
      </a>
    </div>
  )},
  {id: 4, content: (
    <div className="slide-content">
      <img src={photo4} alt="Slide 1" />
      <a href="https://titipi.org/" target="_blank" rel="noopener noreferrer">
        <h2>TITIPI</h2>
      </a>
    </div>
  )},
  {id: 5, content: (
    <div className="slide-content">
      <img src={photo5} alt="Slide 1" />
      <a href="https://www.rochesterartistcollaborative.com/" target="_blank" rel="noopener noreferrer">
        <h2>Rochester Artist Collaborative</h2>
      </a>
    </div>
  )}
]

function community() {
  return (
    <div className="Page" id="Community">
      <div className="community-content">
        <VerticalCarousel slides={slides} autoSlideInterval={5000} />
      </div>
      <Marquee_Collection/>
    </div>
  )
}

export default community;