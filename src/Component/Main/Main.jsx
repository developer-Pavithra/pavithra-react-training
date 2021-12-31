import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { Career } from '../Career/Career';
import { AboutUs } from '../AboutUs/AboutUs';
import NotFound from '../NotFound/NotFound';

export function Main() {
  let sidebarDetails = [
    { id: 1, path: '/home', label: 'Home' },
    { id: 2, path: '/about-us', label: 'About Us' },
    { id: 3, path: '/career', label: 'Carrer' },
  ];
  console.log('main');
  return (
    <div>
      <Header />
      <Router>
        <div style={{ display: 'flex' }}>
          <nav style={{ width: '30%' }}>
            {sidebarDetails.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </nav>
          <div
            style={{
              borderLeft: '2px solid',
              minHeight: '92vh',
              marginLeft: '10px',
              padding: '20px',
            }}
          >
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/career" component={Career} />
              <Route component={NotFound} />
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
