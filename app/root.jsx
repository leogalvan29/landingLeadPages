import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from './styles/index.css'


export function  meta(){
  return [
      {
        title:"diseno de paginas web",
        description:"disenador de paginas web"
      }
  ]
}

export function links(){
   return [
      {
        rel:"stylesheet",
        href:styles
      },
      {
        rel:"preconnect",
        href:"https://fonts.googleapis.com"
      },
      {
        rel:"preconnect",
        href:"https://fonts.gstatic.com",
        crossOrigin:"true"
      },
      {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap"
      }
   ]
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
     
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
