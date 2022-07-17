import React, { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';

const MessagesRender = ({ messages, currentUser }) => {
  const scroll = useRef(null);

  useEffect(() => {
    return scroll.current.scrollIntoView({ behaviour: 'auto' });
  }, [messages]);

  return (
    <>
      {messages.map(({ to, from, text, createdAt, media }) => (
        <MessageItem
          key={createdAt}
          currentUser={currentUser}
          to={to}
          from={from}
          text={text}
          createdAt={createdAt}
          media={media}
          scroll={scroll}
        />
      ))}
      <div ref={scroll}></div>
    </>
  );
};

export default MessagesRender;
