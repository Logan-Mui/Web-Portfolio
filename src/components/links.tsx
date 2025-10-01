import email from '../assets/links/email.svg';
import linkedin from '../assets/links/linkedin.svg';
import github from '../assets/links/github.svg'

function Links() {

  return (
    <div id="Links">
        <a href="mailto:loganmui19@gmail.com">
            <img src={email}></img>
        </a>
        <a href="https://www.linkedin.com/in/logan-mui/">
            <img src={linkedin}></img>
        </a>
        <a href="https://github.com/Logan-Mui">
            <img src={github}></img>
        </a>
    </div>
  )
}

export default Links;