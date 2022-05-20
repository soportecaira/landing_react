const HeaderStudent = () => {
    return (
      <section className="flex" id="first">   
                <article>
                    <h2>Conecta con</h2>
                    <h1>universidades</h1>
                    <p>Te ayudamos a decidir tu futuro</p>
                </article>

                <div className="form">
                    <form id="form-1" style="display: none;">
                        <div className="flex"><h3>Únete a la comunidad</h3><img className="f-arrow" src="assets/Recursos/flecha-derecha.svg"/></div>
                        <input id="loginEmail" type="email" placeholder="Email"/><br/>
                        <input id="loginPwd"  type="password" placeholder="Password"/><br/>
                        <input type="submit" value="Log in" onclick="loginButton()"/><br/>
                        <div className="google">
                            <a href="https://caira.auth.eu-central-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&response_type=token&client_id=2lhfuid7ce4uamq05phqotlnk2&redirect_uri=https://apicaira.lunarxy.com/docs&scope=aws.cognito.signin.user.admin+email+openid+profile">
                                <img className="lg" src="assets/Recursos/google-brands.svg"/>Login with Google </a><br/>  
                        </div>
                        <a href="#" id="a-form1">¿Eres nuevo en Caira? ¡Regístrate ya!</a>
                    </form>
                    <form id="form-2" onsubmit="return registroBoton()">
                        <div className="flex"><h3>Únete a la comunidad</h3><img className="f-arrow" src="assets/Recursos/flecha-derecha.svg"/></div>
                        <div className="flex">
                            <input id="username" type="text" placeholder="Nombre"/>
                            <input id="usersurname" type="text" placeholder="Apellidos"/>
                        </div>
                        <input id="useremail" type="email" placeholder="Email"/>
                        <div className="flex">
                            <input id="userpwd" type="password" placeholder="Password" className="pwd"/>
                            <input id="userpwdconf" type="password" placeholder="Confirm Password" className="pwd"/>
                        </div>
                        <div id="togglePassword" className="flex">
                            <img src="assets/Recursos/eye.svg" id="tp-icon"/><p id="tp-text">Show password</p>
                        </div>
                        <p id="errorMessage"></p>
                        <input id="signupbtn" type="submit" value="Regístrate"/><br>
                        <div className="google">
                            <a href="https://caira.auth.eu-central-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&response_type=token&client_id=2lhfuid7ce4uamq05phqotlnk2&redirect_uri=https://caira.io/registerView/graciasregistroGoogle.html&scope=aws.cognito.signin.user.admin+email+openid+profile">
                                <img className="lg" src="assets/Recursos/google-brands.svg"/>Registrar con Google</a><br/>  
                        </div>
                        /* </br><a href="#" id="a-form2">Already have an account? Log in</a> */
                    </form>
                </div>
            </section>
    );
  };
  
export default HeaderStudent;
