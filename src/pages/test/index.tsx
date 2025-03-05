import React, { useState } from 'react';

const TestPage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Hello React!2</h1>
      <div>
        <button aria-label="Increment value">Increment</button>
        <span>{count}</span>
        <button aria-label="Decrement value">Decrement</button>
      </div>
    </>
  );
};

export default TestPage;
