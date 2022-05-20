import React from "react";
import "./Opinions.scss";

function Opinions() {
    return (
        <div className="center-title">
            <h1>Looking for a profesional career?</h1>
            <h3>You are not alone!</h3>
            <div className="flex">
                <div className="carrusel flex">
                    <div className="arrow left"><img src="./../assets/Recursos/flecha-izquierda.svg"></img></div>
                    <div className="back-white card-opinion">
                        <p><img className="op-card" id="op-img" src="./../assets/perfil1.jpg"></img></p>
                        <p className="op-card" id="op-txt">Caira me ha dado la oportunidad que necesitaba.</p>
                        <p className="op-card stars" id="op-star">★★★★★</p>
                    </div>
                    <div className="arrow right"><img src="./../assets/Recursos/flecha-derecha.svg"></img></div>
                </div>
            </div>
            <div className="flex"><button className="purple"><a href="#form-2">Join us</a></button></div>
        </div>
    )
}

export default Opinions;