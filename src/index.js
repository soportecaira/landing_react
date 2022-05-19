import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';

import 'css/style.css';
import 'css/animation.css';
import 'css/responsive.css';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
document.getElementById('root')
);


