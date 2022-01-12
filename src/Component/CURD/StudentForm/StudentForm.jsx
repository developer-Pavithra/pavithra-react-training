import React from 'react';
import { StudentTable } from '../../../Component/CURD/StudentTable/StudentTable';
import './StudentForm.css';
export function StudentForm(props) {
  return (
    <div className="curd-op">
      <h4>Student Details</h4>
      <StudentTable />
    </div>
  );
}
