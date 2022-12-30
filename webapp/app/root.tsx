import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, } from "@remix-run/react";
import { Navbar } from "~/components/Navbar";
import stylesUrl from "~/styles/index.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Meet your mentor",
  description: "Meet your mentor website",
  viewport: "width=device-width,initial-scale=1",
});

export const links : LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta/>
        <Links/>
      </head>
      <body>
        <Navbar/>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <html>
      <head>
        <title>Page not found</title>
        <Meta/>
        <Links/>
      </head>
      <body>
        <Navbar/>
        <h2>Oops, we couldn't find the page you requested.</h2>
        <Scripts/>
      </body>
    </html>
  );
}