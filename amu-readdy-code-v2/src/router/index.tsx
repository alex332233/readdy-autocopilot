import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './config';

const router = createBrowserRouter(routes, {
  basename: __BASE_PATH__,
});

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
