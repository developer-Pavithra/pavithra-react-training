import React, { useState } from 'react';
export function UpdateValue(props) {
  const [details, setDetails] = useState({
    name: '',
    age: '',
    city: '',
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    alert(details.name + ' ' + details.age + '  submitted');
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={details.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={details.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={details.city}
          onChange={handleChange}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}
