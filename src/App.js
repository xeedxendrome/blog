

import Ner from './neb';
import Home from './home'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Create from './Create';
import Blogde from './BlogDe';

function App() {
  
  return (
    <Router> 
       <div className="App">
      <Ner/>
      <div className="content">
        <Switch>  
          <Route exact path="/"> 
          <Home/>
          </Route>

          <Route path="/Create">
<Create/>
          </Route>
          <Route path="/blogs/:id">
<Blogde/>
          </Route>
        </Switch>
        
     
      </div>
     
    
    </div> </Router>
   
  );
}

export default App;
