import React, { useState, useEffect } from 'react';
export function Lifecycle() {
  const [count, setCount] = useState(0);
  const [place, setPlace] = useState('chennai');

  return (
    <div>
      <input
        type="place"
        placeholder="Enter Place"
        onChange={(e) => setPlace(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        clicked {count} times{' '}
      </button>
      <Location place={place} count={count} />
    </div>
  );
}

function Location() {
  return (
    <>
      <h5>Location:</h5>
    </>
  );
}
