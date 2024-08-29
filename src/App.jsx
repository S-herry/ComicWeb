import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComicInfo from "./components/comicInfo/ComicInfo";

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
    ],
  },
  {
    children: [
      {
        path: "/login",
        element: <Login />,
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
