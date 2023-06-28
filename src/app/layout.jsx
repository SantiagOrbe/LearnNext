import './globals.css';
import {Navigation} from "./components/Navigation";
import { font } from "./font"


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next :D!</title>
      </head>

      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
