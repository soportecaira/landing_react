const HeaderCenter = () => {
    return (
      <section className="flex" id="center-1">   
            <article>
                <h1>Acercamos estudiantes a tu institución</h1>
                <p>Ponle fácil al estudiante conectar contigo. Ayúdale a crecer personal y profesionalmente.</p>
            </article>

            <div id="book" className="flex-c">
                <h3>¿Te gustaría hablar con nosotros?</h3>

                <div className="flex" id="calendy" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/pruizdiez'});return false;">
                    <img className="icon-s" src="assets/Recursos/calendar.svg"/> 
                    <p><b>Reserva una llamada</b></p>
                </div>
            </div>
        </section>
    );
  };
  
export default HeaderCenter;
