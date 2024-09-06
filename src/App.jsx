import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComicInfo from "./components/comicInfo/ComicInfo";
import Register from "./pages/Register";
import User from "./pages/User";
import UserContent from "../src/context/user/UserContent";
const router = createBrowserRouter([
  {
    element: (
      <UserContent>
        <Layout />
      </UserContent>
    ),
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: `/comic`,
        element: <ComicInfo />,
      },
      {
        path: `/user`,
        element: (
          <UserContent>
            <User />
          </UserContent>
        ),
      },
    ],
  },
  {
    children: [
      {
        path: "/login",
        element: (
          <UserContent>
            <Login />
          </UserContent>
        ),
      },
      {
        path: "/register",
        element: (
          <UserContent>
            <Register />
          </UserContent>
        ),
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
