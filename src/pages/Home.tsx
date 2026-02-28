import { RouterProvider } from "react-router-dom";
import { AppRouter } from "../route/AllRoute";

export const Home = () => {
  return <RouterProvider router={AppRouter} />;
};
