import { RouterProvider } from "react-router-dom";
import { AppRouter } from "../route/AllRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/authSlice";

export const Home = () => {
  return <RouterProvider router={AppRouter} />;
};
