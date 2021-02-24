import React, { useState } from 'react';
import { TabSelect } from 'cc-react-ui';
import styles from './index.less';

export default () => {
  const [color, setColor] = useState(null);
  const options = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Orange", value: "orange" }
  ];

  return (
    <div className={styles.tab}>
      haha
      <TabSelect
        options={options}
        value={color}
        onChange={c => setColor(c)}
      />
    </div>
  );
}