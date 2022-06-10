import { useState } from 'react';

export default function useAuth() {
  const [messages, setMessages] = useState([
    "Hello There",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id mauris ac lacus pretium porta. Duis aliquet at urna sed hendrerit. Vivamus tincidunt scelerisque sagittis. Curabitur a tellus tellus. Integer rhoncus tortor ac erat posuere venenatis. Aenean scelerisque augue et sagittis finibus. Aenean placerat augue eu neque finibus, non interdum lorem sollicitudin."
  ]);

  async function getMessages() {
      return messages
  }

  async function setNewMessage(newMessage) {
    setMessages(allMessages => ([...allMessages, newMessage]))
  }

  return {
      messages,
      getMessages,
      setNewMessage
  };
}
