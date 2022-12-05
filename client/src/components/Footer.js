import React from "react";
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'

function Footer() {
  return (
    <footer>
      <div className="footer1">
      <hr className="footer-seperation" />
      <section className="footer-info">
        <section className="footer-social-media">
          <ul>
            <li>
            <a href="https://linkedin.com"><img src={Linkedin} alt="Linkedin logo"/></a>
            </li>
            <li>
            <a href="https://instagram.com"><img src={Instagram} alt="Instagram logo"/></a>
            </li>
            <li>
            <a href="https://facebook.com"><img src={Facebook} alt="facebook logo"/></a>
            </li>
          </ul>
        </section>
        <section className="footer-left">
          <section className="footer-info__name">Recipedia</section>
          <section className="footer-info__rights">
            Copyright © 2022, Recipedia. All Rights Reserved{" "}
          </section>
        </section>
        <section className="footer-right">
          <section className="footer-info__contact">Contact Us :</section>
          <section className="footer-info__email">
            Email: recipediaCLT@gmail.com
          </section>
          <section className="footer-info__number">Tel: 646-973-6231</section>
        </section>
      </section>
      </div>

      <div className="ResponsiveFooter">
      <hr/>
      <br></br>
      <br></br>
      <div className="socials">
            <a href="https://facebook.com"><img src={Facebook} alt="facebook logo"/></a>
            <a href="https://linkedin.com"><img src={Linkedin} alt="Linkedin logo"/></a>
            <a href="https://instagram.com"><img src={Instagram} alt="Instagram logo"/></a>
        </div>

        <div className="last">
            <p>136 E 36th St Charlotte, NC 28205  |  (888) 999-8212  |  recipediaCLT@gmail.com</p>
            <p>&copy; RECIPEDIA 2022. All Rights Reserved</p>
        </div>
        </div>


      
    </footer>
  );
}
export default Footer;
























// import React from "react";
// import Instagram from '../assets/instagram.png'
// import Facebook from '../assets/facebook.png'
// import Linkedin from '../assets/linkedin.png'


// function Footer() {
//   return (
//     <footer>
    
        // <div id="socials">
        //     <a href="https://facebook.com"><img src={Facebook} alt="facebook logo"/></a>
        //     <a href="https://linkedin.com"><img src={Linkedin} alt="Linkedin logo"/></a>
        //     <a href="https://instagram.com"><img src={Instagram} alt="Instagram logo"/></a>
        // </div>

        // <div id="last">
        //     <p>136 E 36th St Charlotte, NC 28205  |  (888) 999-8212  |  recipediaCLT@gmail.com</p>
        //     <p>&copy; RECIPEDIA 2022. All Rights Reserved</p>
        // </div>
// </footer>
//   );
// }
// export default Footer;