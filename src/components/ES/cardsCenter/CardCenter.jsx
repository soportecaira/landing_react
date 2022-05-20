const CardCenter = () => {
    return (
      <section className="center-title" id="third">
            <h1>Crecemos juntos</h1>
            <p className="text-pink">Tu éxito es nuestro éxito</p>
            <br/>
            <div id="cards-resp">
                <div className="flex">
                    <div className="arrow3 left"> <img src="assets/Recursos/flecha-izquierda.svg"/> </div>
                    <div className="info-card-2 back-white text-purple">
                        <p><img id="in-img" src="assets/Recursos/+student.png"/></p>
                        <h3 id="in-title">Consigue estudiantes</h3>
                        <p id="in-sub">Te hacemos un setup y decidimos una estrategia para conseguir estudiantes.</p>
                    </div>
                    <div className="arrow3 right"> <img src="assets/Recursos/flecha-derecha.svg"/> </div>
                </div>
            </div>
            <div className="flex" id="cards">
                <div className="info-card-2">
                    <p><img src="assets/Recursos/+student.svg"/></p>
                    <h3>Consigue estudiantes</h3>
                    <p>Decidimos por ti una estrategia para conseguir estudiantes.</p>
                </div>
                <div className="info-card-2">
                    <p><img src="assets/Recursos/conex.png"/></p>
                    <h3>Un nuevo canal</h3>
                    <p>Crea contenido para recibir leads. Gestiona un nuevo canal de captación.</p>
                </div>
                <div className="info-card-2">
                    <p><img src="assets/Recursos/Corona.png"/></p>
                    <h3>Compartimos éxito</h3>
                    <p>Nuestro trabajo da sus frutos. Nosotros no ganamos si tú no ganas.</p>
                </div>
            </div>
        </section>
    );
  };
  
export default CardCenter;
