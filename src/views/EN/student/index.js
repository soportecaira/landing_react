import {Header,HeaderStudent,CardsStudent,Metaverse,Partners,Contact,Footer,Opinions,Pulpo,WhatIsCaira} from "../../../components/EN"

const StudentEN = () => {
    return(
        <div>
            <Header/>
            <main>
                <HeaderStudent/>
                <WhatIsCaira/>
                <CardsStudent/>
                <Pulpo/>
                <Opinions/>
                <Metaverse/>
                <Partners/>
                <Contact/>
            </main>
            <Footer/>
            <script src="../src/cognito/register.js"></script>
            <script src="../src/cognito/login.js"></script>
            <script src="../src/scripts/partners.js"></script>
            <script src="../src/scripts/studentEN.js"></script>
        </div>
    );
}

export default StudentEN;
