import React, { useState, useEffect } from 'react';
import axios from 'axios';
export function StudentTable() {
  let studentURL = {
    getStudentURL: 'https://61dd4f33f60e8f00176686f2.mockapi.io/api/student',
  };
  const [count, setCount] = useState(0);
  const [tableDetails, setTableDetails] = useState([]);

  useEffect(() => {
    getTableDetails();
  }, []);

  let getTableDetails = () => {
    //axios-callback , success .then , failure .catch
    //promise -resolve(success) , reject (failure)
    axios
      .get(studentURL.getStudentURL)
      .then((response) => {
        console.log(response);
        setTableDetails(response.data);
      })
      .catch((err) => {
        console.log('errror-----', err);
      });
  };

  console.log('hiii');
  let handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>Student Table</h4>
      {tableDetails.length > 0
        ? tableDetails.map((item) => {
            return (
              <li>
                {item.name} {item.age} {item.city}
              </li>
            );
          })
        : ''}

      <button onClick={() => handleClick()}>Click{count}</button>
    </div>
  );
}
