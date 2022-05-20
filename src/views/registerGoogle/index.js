import {Header,Footer} from "../../../components/EN"

const RegisterGoogle = () => {
    return(
        <div>
            <Header/>
            <main>
                <section id="thx">   
                    <h1 id="messageRegistered"><b></b></h1>
                    <h2>We hope to see you on Cairaland event :)</h2>
                </section>
            </main>
            <Footer/>
            <script src="../src/scripts/registerGoogle.js"></script>
        </div>
    );
}

export default RegisterGoogle
