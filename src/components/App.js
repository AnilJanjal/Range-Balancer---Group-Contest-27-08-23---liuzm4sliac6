
import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleRangeAChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (newValue + rangeB <= maxSum) {
      setRangeA(newValue);
  )
};
    const handleRangeBChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (rangeA + newValue <= maxSum) {
      setRangeB(newValue);
    }
  };
     const sum = rangeA + rangeB;

  return (
    <div>
      <div id="max-sum-holder">
        <input
          type="number"
          value={maxSum}
          onChange={(event) => setMaxSum(parseInt(event.target.value))}
        />
      </div>

      <div id="range-a-holder">
        <input
          type="range"
          value={rangeA}
          max={rangeB === 0 ? maxSum : Math.min(maxSum - rangeB, rangeA)}
          onChange={handleRangeAChange}
        />
        <div id="range-a-value">{rangeA}</div>
      </div>

      <div id="range-b-holder">
        <input
          type="range"
          value={rangeB}
          max={rangeA === maxSum ? 0 : Math.min(maxSum - rangeA, rangeB)}
          onChange={handleRangeBChange}
        />
        <div id="range-b-value">{rangeB}</div>
      </div>

      <div id="sum">{sum}</div>
    </div>
  );
};


export default App;
