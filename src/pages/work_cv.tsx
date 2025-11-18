import Preview from "../components/preview";
import "../styles/work_cv/preview.css";

function WorkCv() {
  return (
    <div className="Page" id="WorkCv">
      <div className="previewBox">
        <Preview image="./links/logan_mui_resume.pdf"/>
        <Preview image="./links/logan_mui_cv.pdf"/>
      </div>
    </div>
  );
}

export default WorkCv;