import Links from "./links"
function Home() {
    return (
    <div id="Home">
        <a href="#splash">LM</a>
    </div>
    )
}


function Header() {

  return (
    <div className = 'Header'>
        <Home></Home>
        <Links></Links>
    </div>
  )
}

export default Header;