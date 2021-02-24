import React, { useState } from 'react';
import AdvancedTabSelector from '@/components/AdvancedTabSelector';

export default () => {
  const [color, setColor] = useState(null);
  const [animal, setAnimal] = useState(null);
  const [count, setCount] = useState(0);

  const addTwice1 = () => {
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
  }

  const addTwice2 = () => {
    setCount(count+1)
    setCount(count+1)
  }

  const colors = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Orange", value: "orange" }
  ];
  
  const animals = [
    { name: "Tiger", value: "tiger" },
    { name: "Elephant", value: "elephant" },
    { name: "Bird", value: "bird" }
  ];

  return (
    <div>
      <h3>Select color: </h3>
      <AdvancedTabSelector
        options={colors}
        value={color}
        onChange={c => setColor(c)}
      >
        {color => (
          <span
            style={{
              display: "inline-block",
              backgroundColor: color,
              width: "40px",
              height: "40px"
            }}
          />
        )}
      </AdvancedTabSelector>
      <h3>Select animal: </h3>
      <AdvancedTabSelector
        options={animals}
        value={animal}
        onChange={c => setAnimal(c)}
      >
        {animal => (
          <img width="100px" src={require(`./images/${animal}.jpeg`)} />
        )}
      </AdvancedTabSelector>
      <div>count: {count}</div>
      <button onClick={addTwice1}>1</button>
      <button onClick={addTwice2}>2</button>
    </div>
  );
}