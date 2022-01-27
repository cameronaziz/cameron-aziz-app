import type { MetaFunction } from 'remix';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from 'remix';
import Navigation from './components/navigation';

const Root = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script src="/js/popper.min.js" type="text/javascript" />
        <script src="/js/bootstrap.min.js" type="text/javascript" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        <link href="/css/nucleo-icons.css" rel="stylesheet" />
        <link href="/css/nucleo-svg.css" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous" />
        <link href="/css/nucleo-svg.css" rel="stylesheet" />
        <link id="pagestyle" href="/css/soft-design-system.css?v=1.0.5" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export const meta: MetaFunction = () => ({
  title: 'Cameron Aziz - Web Engineer',
});

export default Root;
