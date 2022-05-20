import React from "react";
import "./Contact.scss";

function Contact() {
    return (
        <div className="bottom">
            <p>We are at:</p>
            <img className="lanz" src="./../assets/Recursos/lanzadera.png"></img>
            <div className="loc"><img src="assets/Recursos/enviar.png"></img><p>Caira@caira.io</p></div>
            <div className="loc"><img src="assets/Recursos/ubicacion.png"></img><p>Edificio Lanzadera, Carrer del moll de la aduana S/N</p></div>
            <div className="loc"><img src="assets/Recursos/telefono.png"></img><p>+34 619 286 343</p></div>

            <p>Follow us:</p>
            <div className="flex social">
                <a href="https://twitter.com/Caira_education"><img src="./../assets/Recursos/facebook-azul.svg"></img></a>
                <a href="https://www.instagram.com/caira.io/"><img src="./../assets/Recursos/instagram-azul.svg"></img></a>
                <a href="https://www.linkedin.com/company/caira-education/"><img src="./../assets/Recursos/linkedin-azul.svg"></img></a>
            </div>
        </div>
    )
}

export default Contact;