const Opinions = () => {
    return (
            <section className="center-title" id="fifth">
                <h1>¿Estás buscando una carrera profesional?</h1>
                <h3>No estás solo :)</h3>
                <div className="flex">
                    <div className="carrusel flex">
                        <div className="arrow left"> <img src="assets/Recursos/flecha-izquierda.svg"/> </div>
                        <div className="back-white card-opinion">
                            <p><img className="op-card" id="op-img" src="assets/perfil1.jpg"/></p>
                            <p className="op-card" id="op-txt">Caira me ha dado la oportunidad que necesitaba</p>
                            <p className="op-card stars" id="op-star">★★★★★</p>
                        </div>
                        <div className="arrow right"> <img src="assets/Recursos/flecha-derecha.svg"/> </div>
                    </div>
                </div>
                <div className="flex"><button className="purple"><a href="#form-2">Únete</a></button></div>
            </section>
    );
  };
  
export default Opinions;
