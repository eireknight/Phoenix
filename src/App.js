import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./Components/NavTabs";
import Splash from "./Components/splash";
import Search from "./Components/search";

function Navigation() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" render={props => <div>
          <Splash></Splash>
        </div>
        } />
        <Route exact path="/search" component={Search} />

        

      </div>
    </Router>
  );
}

export default Navigation;
