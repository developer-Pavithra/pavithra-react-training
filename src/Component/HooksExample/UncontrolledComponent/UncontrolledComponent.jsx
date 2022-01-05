import React, { useRef } from 'react';
export function UncontrolledComponent() {
  const distrinctRef = useRef(null);

  let handleDistrinct = () => {
    console.log(distrinctRef.current.value);
  };
  let handleClear = () => {
    // distrinctRef.current.value = '';
    // distrinctRef.current.focus();
    distrinctRef.current.style.color = 'blue';
  };

  return (
    <div>
      <h4>UncontrolledComponent</h4>
      <input
        style={{ color: 'orange' }}
        placeholder="Enter Distrinct"
        type="text"
        ref={distrinctRef}
        onChange={handleDistrinct}
      />

      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
