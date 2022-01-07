import React from 'react';
import { CompletedTask } from '../../../Component/HooksExample/Task/CompletedTask';
export function ProgressTask(props) {
  return (
    <div>
      <hr />
      <h3>ProgressTask </h3>
      <CompletedTask user={props.user} />
    </div>
  );
}
