import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg'

function Links() {

  return (
    <>
        <a href="mailto:loganmui19@gmail.com">
            <img src={email}></img>
        </a>
        <a href="https://www.linkedin.com/in/logan-mui/">
            <img src={linkedin}></img>
        </a>
        <a href="https://github.com/Logan-Mui">
            <img src={github}></img>
        </a>
    </>
  )
}

export default Links;