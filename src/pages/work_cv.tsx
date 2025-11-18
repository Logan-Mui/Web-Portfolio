import Preview from "../components/preview";
import "../styles/work_cv/preview.css";
import resume from "../../public/links/logan_mui_resume.pdf";
import cv from "../../public/links/logan_mui_cv.pdf";

function WorkCv() {
  return (
    <div className="Page" id="WorkCv">
      <div className="previewBox">
        <Preview image={resume} description="resume"/>
        <Preview image={cv} description="cv"/>
      </div>
    </div>
  );
}

export default WorkCv;