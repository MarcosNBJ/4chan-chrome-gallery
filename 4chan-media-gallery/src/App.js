import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
            <Router>
            <Switch>
            <Route exact path="/" component={MediaContainer} /> 

            </Switch>
        </Router>
      
    </div>
  );
}

export default App;
