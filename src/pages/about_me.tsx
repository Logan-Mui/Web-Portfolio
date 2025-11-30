import { InfoDropdown } from "../components/dropdown";

function AboutMe() {
  return (
    <div className="Page" id="AboutMe">
      <h1 className="text-6xl font-serif mb-12">About Me</h1>

      <InfoDropdown title="Professional Background" content="
      I'm a software engineer with a focus on full‑stack development, system
      integrations, and building clean, scalable architectures. I enjoy
      solving hard problems and crafting tools that make real workflows
      easier."/>


      <InfoDropdown title="Skills & Technologies" content="
      oExperienced with: React, TypeScript, Spring Boot, Java, Docker,
      distributed systems, API integrations, and more."/>


      <InfoDropdown title="Outside of Work" content="
      I enjoy photography, embedded electronics, PCB design, and learning
      new technologies just for fun."/>


    </div>
  )
}

export default AboutMe;