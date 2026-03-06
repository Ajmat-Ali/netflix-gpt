import { createBrowserRouter } from "react-router";

import Login from "../components/Login";
import Browse from "../pages/Browse";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
