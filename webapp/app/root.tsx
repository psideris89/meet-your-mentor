import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, } from "@remix-run/react";
import { Navbar } from "~/components/Navbar";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
    <head>
      <title>Meet your mentor</title>
      <Meta/>
      <Links/>
    </head>
    <body style={{ margin: 0, padding: 0 }}>
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
    <body style={{ margin: 0, padding: 0 }}>
      <Navbar/>
      <h2>
        Oops, we couldn't find the page you requested.
      </h2>
      <Scripts/>
    </body>
    </html>
  );
}