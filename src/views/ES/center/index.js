import {Header,HeaderCenter,CardsCenter,Metaverse,Partners,Contact,Footer} from "../../../components/ES"

const centerES = () => {
    return(
        <div>
            <Header/>
            <main>
                <HeaderCenter/>
                <CardsCenter/>
                <Metaverse/>
                <Partners/>
                <Contact/>
            </main>
            <Footer/>
            <script src="../src/scripts/partners.js"></script>
            <script src="../src/scripts/centerES.js"></script>
        </div>
    );
}

export default centerES;