import {ReactNavbar} from 'overlay-navbar'
import logo from "../../images/logo.png"
import {FaUserAlt} from "react-icons/fa"
import "./Navbar.css"
const Navbar=()=>{
    return(
        <>
         <ReactNavbar
        burgerColor="black"
        logo={logo}
        logoWidth = "20vmax"
        navColor1= "white"
        logoHoverSize= "10px"
        logoHoverColor= "#eb4034"
        link1Text= "Home"
        link2Text= "EDRP"
        link3Text= "Contact"
        link4Text= "About"
        link1Url= "/"
        // link2Url= "http://182.71.130.11/edrpsstc/"
        link2Url= "/edrp"
        link3Url= "/contact"
        link4Url= "/about"
        link1Size= "1.3vmax"
        link1Color= "rgba(35, 35, 35,0.8)" 
        nav1justifyContent= "flex-end"
        nav2justifyContent= "flex-end"
        nav3justifyContent= "flex-start"
        nav4justifyContent= "flex-start"
        link1ColorHover= "#eb4034"
        link1Margin= "1vmax"
        searchIconColor= "rgba(35, 35, 35,0.8)"
        cartIconColor= "rgba(35, 35, 35,0.8)"
        profileIconColorHover= "#eb4034"
        searchIconColorHover= "#eb4034"
        cartIconColorHover= "black"
        cartIconMargin= "1vmax"
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        profileIconColor= "black"
        profileIconUrl= "/login"
        />
        </>
    )
}

export default Navbar;