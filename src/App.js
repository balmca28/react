import "./styles.css";

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Smartplug from "./components/Smartplug";
import Growz from "./components/Growz";
import Settings from "./components/Settings";
import Support from "./components/Support";
import MarketplaceSettings from "./components/MarketplaceSettings";
import DemoComponents from "./components/DemoComponents";
import Microgoals from "./components/microgoals/Microgoals";
export default function App() {
  return (
    <div className="App">
      <Router>
    <Switch>
    <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>
      <Route exact path="/products">
        <Products/>
      </Route>
      <Route exact path="/smartplug">
      <Smartplug/>
      </Route>
      <Route exact path="/growz">
      <Growz/>
      </Route>
      <Route exact path="/settings">
      <Settings/>
      </Route>
      <Route exact path="/marketplacesettings">
      <MarketplaceSettings/>
      </Route>
      <Route exact path="/support">
      <Support/>
      </Route>
      <Route exact path="/microgoals">
      <Microgoals/>
      </Route>
      <Route exact path="/components">
      <DemoComponents/>
      </Route>
     
    </Switch>
    </Router>
     
    </div>
  );
}
