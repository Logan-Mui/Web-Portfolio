"use client";

import Marquee_Collection from "../_components/marquee";
import VerticalCarousel from "../_components/carousel";
import photo1 from "../../public/photos/DSC03342.jpg";
import photo2 from "../../public/photos/DSC03412.jpg";
import photo3 from "../../public/photos/IMG_4868.jpg";
import photo4 from "../../public/photos/IMG_4889.jpg";
import photo5 from "../../public/photos/DSC04002.jpg";
import Image from "next/image"
import "../styles/community/community.css";
import "../styles/community/marquee.css";

const communityData = [
  { id: 1, img: photo1, title: "8 Beat Measure", link: "https://8beat.org/" },
  { id: 2, img: photo2, title: "Refuge Worldwide", link: "https://refugeworldwide.com/" },
  { id: 3, img: photo3, title: "Astrarium Games", link: "https://www.astrarium.games/" },
  { id: 4, img: photo4, title: "TITIPI", link: "https://titipi.org/" },
  { id: 5, img: photo5, title: "Rochester Artist Collaborative", link: "https://www.rochesterartistcollaborative.com/" },
]

function community() {
  const slides = communityData.map((item) => ({
    id: item.id,
    content: (
      <div className="slide-content">
        <Image 
          src={item.img}
          alt={item.title} 
          width={500} 
          height={300} 
          style={{ objectFit: 'cover' }}
        />
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <h2>{item.title}</h2>
        </a>
      </div>
    ),
  }));


  return (
    <div className="Page" id="Community">
      <div className="community-content">
          <VerticalCarousel slides={slides} autoSlideInterval={5000} />
          <Marquee_Collection />
        </div>
    </div>
  );
}

export default community;