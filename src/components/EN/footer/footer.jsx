import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer">
        
            <div className="ft-logo">
                <img src="./../assets/logo-gris.png"></img>
            </div>

            <div className="ft-text">
                <div className="flex legal">
                    <p><a>Legal warning</a></p>
                    <p><a>Privacy policy</a></p>
                    <p><a>Cookies policy</a></p>
                </div>
            </div>

            <div className="social">
                <a href="https://twitter.com/Caira_education"><img src="assets/Recursos/facebook-gris.svg"></img></a>
                <a href="https://www.instagram.com/caira.io/"><img src="assets/Recursos/instagram-gris.svg"></img></a>
                <a href="https://www.linkedin.com/company/caira-education/"><img src="assets/Recursos/linkedin-gris.svg"></img></a>
            </div>

            <div>
                <p>Caira © 2022</p>
            </div>

        </div>
    )
}

export default Footer;