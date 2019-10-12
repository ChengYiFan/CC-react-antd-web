import React from 'react';
import { Avatar } from 'antd';

export default ({ className, userName, ...rest }) => {
  let firstStr = '';
  if (!rest.src) {
    firstStr = userName ? userName.substr(0, 1) : '空';
  }
  return (
    <Avatar>
      {firstStr}
    </Avatar>
  );
};
