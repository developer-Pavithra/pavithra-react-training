import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutUs } from '../../Component/AboutUs/AboutUs';
import { Career } from '../../Component/Career/Career';
import { Header } from '../../Component/Header/Header';
import { Home } from '../../Component/Home/Home';
import NotFound from '../../Component/NotFound/NotFound';
import { Sidebar } from '../../Component/Sidebar/Sidebar';
import { Hooks } from '../../Component/HooksExample/Hooks/Hooks';
import './Main.css';
export function Main() {
  return (
    <div>
      <Router>
        <Sidebar />
        <div className="router-outlet">
          <Header />
          <div className="content-layer">
            {/* based upon url your component will render */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/career" component={Career} />
              <Route exact path="/hooks" component={Hooks} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

// router-> based upon path your component will render.
//spa-> appln without reload your component will render dynamically.
