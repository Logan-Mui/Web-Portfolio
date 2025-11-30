import Preview from "../components/preview";
import "../styles/work_cv/preview.css";
import "../styles/work_cv/workcv.css";
import { useState } from 'react';




function WorkCv() {

  const [resume, setResume] = useState(false);
  const [cv, setCV] = useState(false);

  function handleResume() {
    setResume(true);
    setCV(false);
  }

  function handleCV() {
    setCV(true);
    setResume(false);
  }

  return (
    <div className="Page" id="WorkCv">
      <div className="preview-buttons">
        <button className="preview-button" onClick={handleCV}>CV</button>
        <button className="preview-button" onClick={handleResume}>Resume</button>
      </div>
      <div className="preview-box">
        { resume && <Preview image="/photos/logan_mui_resume.pdf"/> }
        { cv && <Preview image="/photos/logan_mui_cv.pdf"/> }
      </div>
    </div>
  );
}

export default WorkCv;