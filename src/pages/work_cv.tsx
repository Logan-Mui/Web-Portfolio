import Preview from "../components/preview";
import "../styles/work_cv/preview.css";
import { useState } from 'react';




function WorkCv() {

  const [resume, setResume] = useState(false);
  const [cv, setCV] = useState(false);

  function handleResume() {
  setResume(!resume);
    if(!resume && cv) {
      setCV(!cv);
    }
  }

  function handleCV() {
    setCV(!cv);
    if(!cv && resume) {
      setResume(!resume);
    }
  }

  return (
    <div className="Page" id="WorkCv">
      <div className="preview-box">
        <button onClick={handleCV}>CV</button>
        <button onClick={handleResume}>Resume</button>
        <Preview image="/photos/logan_mui_resume.pdf"/>
        <Preview image="/photos/logan_mui_cv.pdf"/>
      </div>
    </div>
  );
}

export default WorkCv;