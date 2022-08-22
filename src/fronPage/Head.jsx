import MetaData from "./MetaData";
import { Link } from "react-router-dom";
import "./Head.css"
import logo from "../images/clg.png"
import mainLogo from "../images/main_banner.jpeg"
const Header=()=>{
    return(
        <>
      <MetaData title="SSTC EXAM PORTAL" />
      <div className="home_main">
      <div className="navbar">
        <div className="clg_logo">
          <img src={logo} className="despo"></img>
        </div>
        <div className="nav_items">
          <div className="nav_null"></div>
          <div className="nav_buttons">
         <Link to="http://182.71.130.11/edrpsstc/"><button type="button" class="nav_btn1 sbtn">EDRP</button></Link>
         <Link to="/login"><button type="button" class="nav_btn2 sbtn">LOGIN</button></Link>
         </div>
        </div>
      </div>


      {/*  banner */}
     <div className="main_bbanner">
     {/* <h1 className="b_text">Welcome to Shri Shankaracharya Vidyalaya Technical Campus</h1> */}
        <img src={mainLogo}  className="b_logo"/>
     </div>

{/*  data*/}
<div className="data_container">
  <div className="data_left">
    <div className="left_card">
    <h2>Data</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Voluptates optio ea esse cum placeat? Voluptas perspiciatis 
      quibusdam dolorem molestiae a.
      </p>
      </div>
  </div>
  <div className="data_right">
  <div className="right_card">
    <h2>Data</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Voluptates optio ea esse cum placeat? Voluptas perspiciatis 
      quibusdam dolorem molestiae a.
      </p>
      </div>
</div>
</div>

    {/* footer */}
    <footer id="footer">
        <div className="leftFooter">
          {/* <img src={logo} alt="playstore" className="foot_nav"/> */}
        </div>

        <div className="midFooter">
          <h1>SSTC</h1>
          <p>EXAM PORTAL</p>
          <p>Copyrights 2022 &copy; SSTC</p>
        </div>

        <div className="rightFooter">
          <h4>Important Links</h4>
          <a href="http://182.71.130.11/edrpsstc/">EDRP</a>
          <a href="https://sstc.ac.in/">WEBSITE</a>
        </div>
      </footer>
      </div>

     
          
        </>
    )
}

export default Header;