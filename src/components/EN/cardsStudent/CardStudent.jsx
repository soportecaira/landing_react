import React from "react";
import "./CardStudent.scss";

function CardStudent() {
    return (
        <div className="center-title">
            <h1>Caira helps you to find your path</h1>
            <p className="text-pink">A community where to grow and advancein your professional life</p>
            <br></br>
            <div id="cards-resp">
                <div className="flex">
                    <div className="arrow2 left"><img src="./../assets/Recursos/flecha-izquierda.svg"></img></div>
                    <div className="info-card back-white text-purple">
                        <p><img id="in-img" src="assets/Recursos/Informate.png"></img></p>
                        <h3 id="in-title">Information</h3>
                        <p id="in-sub">Discover all the avaliable options</p>
                    </div>
                    <div className="arrow2 right"><img src="./../assets/Recursos/flecha-derecha.svg"></img></div>
                </div>
            </div>
            <div className="flex" id="cards">
                <div data-aos="fade-up"data-aos-offset="200" className="info-card">
                    <p><img src="assets/Recursos/Informate.png"></img></p>
                    <h3>Information</h3>
                    <p>Discover all the avialiable opctions</p>
                </div>
                <div data-aos="fade-up"data-aos-offset="300" className="info-card">
                    <p><img src="assets/Recursos/Interactua.png"></img></p>
                    <h3>Interact</h3>
                    <p>Know the experiences of former students</p>
                </div>
                <div data-aos="fade-up"data-aos-offset="400" className="info-card">
                    <p><img src="assets/Recursos/Compara.png"></img></p>
                    <h3>Compare</h3>
                    <p>Assess the advantages and disadvantages</p>
                </div>
                <div data-aos="fade-up"data-aos-offset="500" className="info-card">
                    <p><img src="assets/Recursos/Lanzate.png"></img></p>
                    <h3>Hop up!</h3>
                    <p>Collect all you need and go on an adventure!</p>
                </div>
            </div>
        </div>
    )
}

export default CardStudent;