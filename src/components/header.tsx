import Links from "./links"
function Home() {
    return (
    <a href="#splash">LM</a>
    )
}


function Header() {

  return (
    <div className = 'header'>
        <Home></Home>
        <Links></Links>
    </div>
  )
}

export default Header;