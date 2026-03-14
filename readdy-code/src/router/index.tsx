import { useEffect } from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
  type NavigateFunction,
} from "react-router-dom";
import routes from "./config";
import SanityVisualEditing from "../sanity/SanityVisualEditing";

let navigateResolver: (navigate: NavigateFunction) => void;

declare global {
  interface Window {
    REACT_APP_NAVIGATE: NavigateFunction;
  }
}

new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

function NavigationBridge() {
  const navigate = useNavigate();

  useEffect(() => {
    window.REACT_APP_NAVIGATE = navigate;
    navigateResolver(window.REACT_APP_NAVIGATE);
  }, [navigate]);

  return (
    <>
      <Outlet />
      <SanityVisualEditing />
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      element: <NavigationBridge />,
      children: routes,
    },
  ],
  { basename: __BASE_PATH__ },
);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
