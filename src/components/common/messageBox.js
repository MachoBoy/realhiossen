import React from 'react';
import { Message } from 'semantic-ui-react';

const messageBox = ({ compact, icon, success, header, content }) => {
  return (
    <div>
      <Message
        compact={compact}
        icon={icon}
        success={success}
        header={header}
        content={content}
      />
    </div>
  );
};

export default messageBox;
