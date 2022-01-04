import React from 'react';
import './Hooks.css';
import { UpdateValue } from '../../../Component/HooksExample/ UpdateValue/UpdateValue';
import { Lifecycle } from '../../../Component/HooksExample/Lifecycle/Lifecycle';
export function Hooks() {
  return (
    <div className="fun-content">
      <h1>Function component</h1>
      <h3>(stateless component)</h3>
      <h4>Hooks</h4>
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class.
      </p>
      <ol>
        <li>
          <em>useState</em>
          <UpdateValue />
        </li>
        <li>
          <em>useEffect</em>
          <Lifecycle />
        </li>
        <li></li>
      </ol>
    </div>
  );
}
