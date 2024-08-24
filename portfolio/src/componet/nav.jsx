import { Outlet, Link}  from "react-router-dom"
export default function Nav () {

    return (
        <>
        <nav id="Nav"> 
            <h2> <a  style={{ color:'gold', fontFamily:'sans'}} href=""> TJ </a> </h2>
            <ul>
  
                <li>
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Skill">Skill</a>
                    <a href="#Contant">Contant</a>
                    <a href="">Github</a>
                </li>
            </ul>
        </nav>

       
        <Outlet/>
      <  footer>
        <div className="footer-div">
            <p>Copyright @ 2024</p>
            <div className="icon-bar">
            <a href="#Nav"> back to top</a>
            </div>
            
        </div>
       </footer>
        
        </>
    )
}