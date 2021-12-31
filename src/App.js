import React from 'react';
import './style.css';
import { StudentTable } from './StudentTable';
import { Home } from './Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function App() {
  let sidebarDetails = [
    { id: 1, path: '/home', label: 'Home' },
    { id: 2, path: '/aboutus', label: 'About Us' },
    { id: 3, path: '/carrer', label: 'Carrer' },
    { id: 4, path: '/student', label: 'Student' },
  ];
  return (
    <div>
      <header
        style={{
          padding: '20px',
          backgroundColor: 'green',
          color: 'white',
          textAlign: 'center',
        }}
      >
        My App
      </header>
      <div style={{ display: 'flex' }}>
        <nav>
          {sidebarDetails.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.path}>{item.label}</a>
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
          <Router>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/student" component={StudentTable} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
