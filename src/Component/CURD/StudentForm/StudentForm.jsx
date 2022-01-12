import React from 'react';
import { StudentTable } from '../../../Component/CURD/StudentTable/StudentTable';
import { UpdateValue } from '../../../Component/HooksExample/ UpdateValue/ UpdateValue';
import './StudentForm.css';
export function StudentForm() {
  return (
    <div className="curd-op">
      <h4>Student Details</h4>
      <UpdateValue />
      <StudentTable />
    </div>
  );
}
