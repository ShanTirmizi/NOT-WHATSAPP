// import '../styles/globals.css';
// import { UserProvider } from '@auth0/nextjs-auth0';

// function MyApp({ Component, pageProps }) {
//   return (
//     <UserProvider>
//       <Component {...pageProps} />
//     </UserProvider>
//   );
// }

// export default MyApp;

// pages/_app.js
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
