import {AccordionItem, Accordion} from "../components/accordion.tsx";
import "../styles/aboutme/aboutme.css";

function AboutMe() {
  return (
    <div className="Page" id="AboutMe">
      <div className="about-content">
        <div className="about-title">About Me</div>
        <div className="accordion-wrapper">
          <Accordion>
            <AccordionItem title="My story" content="In 2014, I saw Big Hero 6 in theaters. I was completely captivated by everything about it—the cyberpunk style, the thrilling action, and the compelling villain. Surprisingly, none of those elements became my favorite part. It was actually a brief scene in the first act: the school’s showcase. The booths displayed innovation in every discipline imaginable—biology, medicine, ecology, and, of course, Hiro’s nanobots that stole the show. Seeing all these people striving to make the world better made me ask myself, “What good could I do for the world?"/>

            <AccordionItem title="My mission" content="My mission is to make a meaningful difference in the world around me. I want to contribute through my work, whether that’s helping organizations tackle big challenges like sustainability or supporting initiatives that are just starting out. But impact isn’t only about projects or programs—it’s also about people. I hope to lift those around me, whether by offering support, sharing ideas, or simply being kind in everyday moments. For me, making a difference is about combining purpose with connection, and finding ways to leave things a little better than I found them."/>

            <AccordionItem title="Who I work with" content="I want to work with people and teams who are genuinely excited about making a difference. For me, that often means helping organizations tackle challenges like sustainability, but I’m just as energized by companies exploring any kind of positive change. I love collaborating with curious, committed people, sharing ideas, learning from each other, and figuring out how to turn big ambitions into real-world impact. At the end of the day, what matters most is doing work that feels meaningful and leaves a mark."/>

            <AccordionItem title="What I bring" content="I bring prior knowledge in full-stack software development. I am familiar with LAMP and MEAN tech stacks as well as SQL,MySQL, NoSQL, and MongoDB. I also bring extensive knowledge of the workings of power grids from my time at Blindleister, a company that specializes in software for analyzing Germany’s vast renewable-energy grid."/>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;