import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/" > </Route>
        <Route exact path="/" > </Route>
        <Route exact path="/" > </Route>
        <Route exact path="/" > </Route>
      </Switch>
    </div>
  );
}

export default App;
