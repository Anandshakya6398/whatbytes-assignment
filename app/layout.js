import './globals.css';
import ReduxProvider from './store/Provider';
// import Header from './components/Header';

export const metadata = {
  title: 'WhatBytes Assignment',
  description: 'E-commerce demo with Next.js 15 and Redux',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {/* <Header /> */}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}