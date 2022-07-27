import React, { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';

const MessagesRender = ({ messages, currentUser }) => {
  const scroll = useRef(null);

  useEffect(() => {
    return scroll.current.scrollIntoView({ behaviour: 'auto' });
  }, [messages]);

  return (
    <>
      {messages.map((message) =>
        message.projectTitle ? (
          <div>{message.projectTitle}</div>
        ) : (
          <MessageItem
            key={message.createdAt}
            currentUser={message.currentUser}
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
