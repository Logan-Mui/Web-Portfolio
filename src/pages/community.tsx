import Marquee_Collection from "../components/marquee";
import "../styles/community/community.css";
import "../styles/community/marquee.css";

function community() {
  return (
    <div className="Page" id="community">
      <div className="community-content">
        <div className="community-widget">
          <div className="community-links">

          </div>
        </div>
      </div>
      <Marquee_Collection/>
    </div>
  )
}

export default community;