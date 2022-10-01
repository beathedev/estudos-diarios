
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import ConsumindoApi from './pages/ConsumindoApi';

function RoutesApp(){
    return (
        <Router>
          <div>
            <h1>Olá mundo</h1>
    
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/consumindoapi">Consumindo Api</Link>
            
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/sobre" component={Sobre} />
              <Route path="/consumindoapi" component={ConsumindoApi} />
            </Switch>
          </div>
        </Router>
      );
}

export default RoutesApp;