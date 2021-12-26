// pages/index.js
import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';

export default function Index() {
  const { user, error, isLoading } = useUser();
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  console.log(messages);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // create a handle submit function for a form
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.message.value);
    // setMessage(e.target.message.value);
    setMessages([...messages, message]);
    setMessage('');
  };

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send Message</button>
        </form>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
