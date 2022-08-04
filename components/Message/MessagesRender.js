import React, { useState, useEffect, useRef } from 'react';
import MessageItem from './MessageItem';
import ProjectItem from './ProjectItem';

const MessagesRender = ({ messages, messageId, currentUser }) => {
  const [selectedUserDetails, setSelectedUserDetails] = useState();
  const scroll = useRef(null);

  useEffect(() => {
    return scroll.current.scrollIntoView({ behaviour: 'auto' });
  }, [messages]);
  console.log(messages);
  return (
    <>
      {messages.map((message) =>
        message.projectTitle ? (
          <ProjectItem
            key={message.createdAt.toDate()}
            message={message}
            messageId={messageId}
          />
        ) : (
          <MessageItem
            key={message.createdAt}
            currentUser={currentUser}
            to={message.to}
            from={message.from}
            text={message.text}
            createdAt={message.createdAt}
            media={message.media}
            scroll={scroll}
          />
        )
      )}
      <div ref={scroll}></div>
    </>
  );
};

export default MessagesRender;
