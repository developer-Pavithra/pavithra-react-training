import React, { useState } from 'react';
export function Lifecycle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');
  });
  return (
    <div>
      <button onClick={setCount(count++)}>clicked {count} times </button>
    </div>
  );
}
