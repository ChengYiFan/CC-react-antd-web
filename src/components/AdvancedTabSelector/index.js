import React from 'react';
import styles from './index.less';

const AdvancedTabSelector = (props) => {
  const { options, value, children, onChange} = props;
  return (
    <div>
      <ul className={styles.tabSelector}>
        {options.map(opt => (
          <li
            key={opt.value}
            className={`${opt.value === value ? styles.selected : ''}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.name}
          </li>
        ))}
      </ul>
      <div>{value && children(value)}</div>
    </div>
  );
}

export default AdvancedTabSelector;