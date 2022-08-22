import "./Footer.css"
const Footer=()=>{
    return(
        <>
          <footer id="footer">
         <div className="leftFooter">
          <h4>You can find us on playStore and Appstore</h4>
          <p>soon.</p>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
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
        </>
    )
}

export default Footer;
