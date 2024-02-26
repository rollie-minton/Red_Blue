import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Red",
        element: <Red />,
      },
      {
        path: "/Blue",
        element: <Blue />,
      },
    ],
  },
]);

export default router;
