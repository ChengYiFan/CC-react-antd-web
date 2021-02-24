import React, { useState } from "react";
import { Modal } from 'cc-react-ui';

export default () => {
  const [visible, setVisible] = useState(false);
  const onOk = () => {
    alert('确认');
    setVisible(false);
  };
  const onCancel = () => {
    setVisible(false);
  }
  const showModal = () => {
    setVisible(true);
  }
  return (
    <div>
      <button type="button" onClick={showModal}>显示弹窗</button>
      <Modal
        title="确认"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
        <div>我是弹窗</div>
      </Modal>
    </div>
  );
}