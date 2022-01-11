import React, { useEffect, useState } from 'react';
import axios from 'axios';
export function StudentTable() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get('https://61dd3daaf60e8f0017668688.mockapi.io/student')
      .then((response) => {
        console.log('response', response);
        setDetails(response.data);
      });
  }, []);

  let handleDelete = (id) => {
    axios
      .delete('https://61dd3daaf60e8f0017668688.mockapi.io/student' + id)
      .then((response) => {
        console.log('response', response);
      });
  };
  return (
    <div>
      <h4>Student Table</h4>
      {details.length > 0
        ? details.map((item) => {
            return (
              <tbody>
                <tr id={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })
        : ''}
    </div>
  );
}
