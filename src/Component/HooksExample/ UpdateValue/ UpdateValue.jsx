import React from 'react';
export function UpdateValue() {
  const [details, setDetails] = useState({
    name: 'Yazhini',
    age: 5,
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
      <form onSubmit={(e) => handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={details.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={details.age}
          onChange={handleChange}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}
