import React, { useState } from 'react';
import { StartTask } from '../../../Component/HooksExample/Task/StartTask';
import './ContentTask.css';
export function ContextTask() {
  const [status, setStatus] = useState('');
  const statusOption = ['Started', 'Progress', 'Completed'];
  const statusContext = React.createContext('');
  return (
    <div className="context-content">
      <hr />
      <h3>ContextTask</h3>
      <p>Selected status is {status}</p>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option>Select the status</option>
        {statusOption.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      <statusContext.Provider value={{ status, setStatus }}>
        <StartTask />
      </statusContext.Provider>
    </div>
  );
}
