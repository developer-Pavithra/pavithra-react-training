import React from 'react';
import { UpdateValue } from '../../../Component/HooksExample/ UpdateValue/ UpdateValue';
import { Lifecycle } from '../../../Component/HooksExample/Lifecycle/Lifecycle';
import './Hooks.css';

export function Hooks() {
  return (
    <div className="fun-content">
      <h4>Function Component</h4>
      <h5>
        (stateless componenthooks feature react16+ some addition feature
        -useState,useEffect,useCallback,useRef,useDispatch etc..,) without
        writing a class
      </h5>
      <ol>
        <li>
          <em>useState</em>
          <UpdateValue />
        </li>
        <li>
          <em>useEffect</em>
          <Lifecycle />
        </li>
      </ol>
    </div>
  );
}
