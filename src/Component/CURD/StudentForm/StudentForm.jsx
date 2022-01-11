import React from 'react';
import { StudentTable } from '../../../Component/CURD/StudentTable/StudentTable';
import { UpdateValue } from '../../../Component/HooksExample/ UpdateValue/ UpdateValue';
export function StudentForm() {
  useEffect(() => {}, []);
  return (
    <div>
      <h4>Student Details</h4>
      <UpdateValue />
      <StudentTable />
    </div>
  );
}
