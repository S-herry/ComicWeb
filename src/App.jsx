import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComicInfo from "./components/comicInfo/ComicInfo";
import Register from "./pages/Register";
import User from "./pages/User";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/admin",
        element: <Index />,
      },
      {
        path: `/comic`,
        element: <ComicInfo />,
      },
      {
        path: `/user`,
        element: <User />,
      },
    ],
  },
  {
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
