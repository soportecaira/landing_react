import {Header,HeaderCenter,CardsCenter,Metaverse,Partners,Contact,Footer} from "../../../components/EN"

const centerEN = () => {
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
            <script src="../src/scripts/centerEN.js"></script>
        </div>
    );
}

export default centerEN;