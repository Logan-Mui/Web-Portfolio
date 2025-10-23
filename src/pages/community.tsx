import Marquee_Collection from "../components/marquee";
import VerticalCarousel from "../components/carousel";
import "../styles/community/community.css";
import "../styles/community/marquee.css";

const slides = [
  {id: 1, content: <div>Slide 1</div>},
  {id: 2, content: <div>Slide 2</div>},
  {id: 3, content: <div>Slide 3</div>}

]

function community() {
  return (
    <div className="Page" id="community">
      <div className="community-content">
        <VerticalCarousel slides={slides} autoSlideInterval={5000} />
      </div>
      <Marquee_Collection/>
    </div>
  )
}

export default community;