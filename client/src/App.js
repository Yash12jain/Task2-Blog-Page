import React from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Blog from './blog';
//import Update from './update';

const App = () =>{
  return ( 
  

    <Router>
      <Switch>
      <Route exact path="/" component={Blog} />
     {/* <Route exact path="/${id}/update" component={Update} /> */}
      </Switch>  
    </Router>

  )
};

export default App;