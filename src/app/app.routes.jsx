import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "./layouts";
import { ContactList, ErrorPage, Home, UserList } from "./Components";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "contacts",
        element: <ContactList />,
      },
    ],
  },
]);

export default appRoutes;
