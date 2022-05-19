import React from "react";
import {Switch,Route} from "react-router-dom";

import CenterEN from "views/EN/center";
import CenterES from "views/ES/center";
import StudentEN from "views/EN/student";
import StudentES from "views/ES/student";
import RegisterEN from "views/EN/register";
import RegisterES from "views/ES/register";
import RegisterGoogle from "views/registerGoogle";
import Aviso from "views/legal/aviso";
import Cookies from "views/legal/cookies"
import Privacidad from "views/legal/privacidad";

const Index = () => {
  
  return (
    
    <div>

          <Switch>
              <Route exact path='/EN/center' component={ CenterEN } />
              <Route exact path='/EN/student' component={ StudentEN } />
              <Route exact path='/EN/register' component={ RegisterEN } />
              <Route exact path='/ES/center' component={ CenterES } />
              <Route exact path='/ES/student' component={ StudentES } />
              <Route exact path='/ES/register' component={ RegisterES } />
              <Route exact path='/legal/aviso' component={ Aviso } />
              <Route exact path='/legal/cookies' component={ Cookies } />
              <Route exact path='/legal/privacidad' component={ Privacidad } />
              <Route exact path='/GRegister' component={ RegisterGoogle } />
          </Switch>

    </div>

  );

};

export default Index;