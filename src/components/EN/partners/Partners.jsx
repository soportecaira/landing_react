import React from "react";
import "./Partners.scss";

function Partners() {
    return (
        <div className="center-title">
            <h1>Boosted by:</h1>
            <div className="lanz"><img src="./../assets/Recursos/lanzadera.png"></img></div>
            <div className="slider">
                <div className="uni-logo">
                    <a classname="link" href="https://www.facebook.com/Unavir-108107404246902/" target="_blank"><img className="partner" src="assets/Recursos/logos/unavir.jpg" alt=""></img></a>
                </div>
                <div className="uni-logo">
                    <a classname="link" href="https://elingua.es/" target="_blank"><img className="partner" src="assets/Recursos/logos/elingua.png" alt=""></img></a>
                </div>
                <div className="uni-logo">
                    <a classname="link" href="https://lunarxy.com/" target="_blank"><img className="partner" src="assets/Recursos/logos/lunar.jpg" alt=""></img></a>
                </div>
                <div className="uni-logo">
                    <a classname="link" href="" target="_blank"><img className="partner" src="assets/Recursos/logos/Iso gradiente.png" alt=""></img></a>
                </div>
            </div>
        </div>
    )
}

export default Partners;