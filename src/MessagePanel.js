import React from "react";

const MessagePanel = ({ message, backgroundColor }) => {
  return (
    <div className={`ui visible message ${backgroundColor}`}>
      <p>{message}</p>
    </div>
  );
};

MessagePanel.defaultProps = {
  backgroundColor: ''
}

export default MessagePanel;