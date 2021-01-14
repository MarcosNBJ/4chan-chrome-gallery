import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MediaContainer from './MediaContainer'; 
import axios from "axios";

function App() {

  return (
    <div className="App">
            {/* <Router>
            <Switch>
            <Route exact path="/mimir/:thread_id" component={MediaContainer} /> 

            </Switch>
        </Router> */}
        <MediaContainer thread_url="https://boards.4channel.org/w/thread/2188911"/>
    </div>
  );
}

export default App;
