import { RouteObject } from "react-router-dom";
import Layout from '../Layout'
import Boards from '../pages/Boards';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Boards />,
      },
    ],
  },
];

export default routes;
