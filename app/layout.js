/* eslint-disable @next/next/no-head-element */
import Navbar from "./nav-bar";
export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>

      <body>
        <Navbar />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
