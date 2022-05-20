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
        </div>
    );
}

export default centerES;