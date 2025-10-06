import email from '../assets/links/email.svg';
import linkedin from '../assets/links/linkedin.svg';
import github from '../assets/links/github.svg'

function Links() {

  return (
    <div id="Links">
      <a href="https://www.linkedin.com/in/logan-mui/" target="_blank">
            <img src={linkedin}></img>
      </a>
      <a href="https://github.com/Logan-Mui" target="_blank">
          <img src={github}></img>
      </a>
      <a href="mailto:loganmui19@gmail.com" target="_blank">
          <img src={email}></img>
      </a>    
    </div>
  )
}

export default Links;