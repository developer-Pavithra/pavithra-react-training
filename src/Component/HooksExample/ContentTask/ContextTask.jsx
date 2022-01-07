import React, { useState } from 'react';
import { StartTask } from '../../../Component/HooksExample/Task/StartTask';
import './ContextTask.css';

export function ContextTask() {
  const [status, setStatus] = useState('');
  const statusOption = ['Started', 'Progress', 'Completed'];
  return (
    <div className="context-content">
      <h3>ContextTask</h3>
      <p>Selected status is {status}</p>
      <StartTask />
    </div>
  );
}
