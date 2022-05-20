const CardStudent = () => {
    return (
      <section className="center-title" id="third">
                <h1>Caira te ayuda a trazar el camino,
                    tú lo recorres</h1>
                <p className="text-pink">Una comunidad donde crecer y avanzar
                    en tu vida profesional.</p>
                <br/>
                <div id="cards-resp">
                    <div className="flex flex-info">
                        <div className="arrow2 left"> <img src="assets/Recursos/flecha-izquierda.svg"/> </div>
                        <div className="info-card back-white text-purple">
                            <p><img id="in-img" src="assets/Recursos/Informate.png"/></p>
                            <h3 id="in-title">Infórmate</h3>
                            <p id="in-sub">Descubre todas las opciones que están en tu mano.</p>
                        </div>
                        <div className="arrow2 right"> <img src="assets/Recursos/flecha-derecha.svg"/> </div>
                    </div>
                </div>
                <div className="flex" id="cards">
                    <div data-aos="fade-up"data-aos-offset="200" className="info-card">
                        <p><img src="assets/Recursos/Informate.png"/></p>
                        <h3>Infórmate</h3>
                        <p>Descubre todas las opciones que están en tu mano.</p>
                    </div>
                    <div data-aos="fade-up"data-aos-offset="300" className="info-card">
                        <p><img src="assets/Recursos/Interactua.png"/></p>
                        <h3>Interactúa</h3>
                        <p>Conoce las experiencias de antiguos alumnos.</p>
                    </div>
                    <div data-aos="fade-up"data-aos-offset="400" className="info-card">
                        <p><img src="assets/Recursos/Compara.png"/></p>
                        <h3>Compara</h3>
                        <p>Valora los pros y contras de tu opciones.</p>
                    </div>
                    <div data-aos="fade-up"data-aos-offset="500" className="info-card">
                        <p><img src="assets/Recursos/Lanzate.png"/></p>
                        <h3>¡Lánzate!</h3>
                        <p>Recoge todo lo necesario y ¡cómete el mundo!</p>
                    </div>
                </div>
            </section>
    );
  };
  
export default CardStudent;
