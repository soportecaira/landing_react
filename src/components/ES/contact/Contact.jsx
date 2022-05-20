const Contact = () => {
    return (
      <section id="contact">
            <h1>¿Deseas contactar con nosotros?</h1>
            <div className="flex-lc">
                <div className="bottom">
                    
                    <form id="contact-form" action="https://formsubmit.co/caira@caira.io" method="POST">
                        <input type="text" placeholder="Nombre y apellidos"/><br/>
                        <input type="text" name="email" placeholder="Correo electrónico"/><br/>
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="hidden" name="_subject" value="Nuevo correo desde la web!"/>
                        <input type="hidden" name="_template" value="table"/>
                        <input type="hidden" name="_next" value={window.location.href}/>
                        <textarea name="message"></textarea>
                        <p><input type="checkbox"/>Acepto el Aviso Legal y la Política de Privacidad</p>
                        <button type="submit" className="purple" id="send-contact">Enviar</button>
                    </form>
                </div>

                <div className="bottom" id="b2">
                    <p>Estamos en:</p>
                    <img className="lanz" src="assets/Recursos/lanzadera.png"/>
                    <div className="loc"><img src="assets/Recursos/enviar.png"/><p>Caira@caira.io</p></div>
                    <div className="loc"><img src="assets/Recursos/ubicacion.png"/><p>Edificio Lanzadera, Carrer del moll de la aduana S/N</p></div>
                    <div className="loc"><img src="assets/Recursos/telefono.png"/><p>+34 619 286 343</p></div>

                    <p>Síguenos</p>
                    <div className="flex social">
                        <a href="https://twitter.com/Caira_education"><img src="assets/Recursos/facebook-azul.svg"/></a>
                        <a href="https://www.instagram.com/caira.io/"><img src="assets/Recursos/instagram-azul.svg"/></a>
                        <a href="https://www.linkedin.com/company/caira-education/"><img src="assets/Recursos/linkedin-azul.svg"/></a>
                    </div>
                </div>
            </div>
        </section>
    );
  };
  
export default Contact;
