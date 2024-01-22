import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./output.css";
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";
import Page from "./Components/Layout/Page.tsx";
import SelectArea from "./Pages/SelectArea/SelectArea.tsx";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
const rootRoute = new RootRoute({
  component: () => (
    <>
      <Page>
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-center gap-4 p-4">
            <Link to="/" className="hover:text-red-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-red-500">
              About
            </Link>
            <Link to="/area" className="hover:text-red-500">
              Select area
            </Link>
          </div>
          <Outlet />
        </div>
      </Page>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <App />;
  },
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

const makePlansRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/area",
  component: SelectArea,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  makePlansRoute,
  aboutRoute,
]);
const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
