import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import FileUploadForm from "./pages/FileUploadForm";
import HomePage from "./pages/HomePage";
import LoginPage from '../src/pages/LoginPage';
import Spinner from "./Reusable Components/Spinner";

const Media = lazy(() => import("./pages/Media"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/formUpload",
    element: <FileUploadForm />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/media",
    element: (
      <Suspense fallback={<Spinner />}>
        <Media />
      </Suspense>
    ),
  },
]);
root.render(
  <RouterProvider router={route}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
