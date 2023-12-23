import { RouterProvider } from "react-router-dom";
import "./App.css";
import ContactListContextProvider from "./Contexts/ContactList/ContactListContextProvider";
import appRoutes from "./app.routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ContactListContextProvider>
    <ToastContainer newestOnTop />
      <RouterProvider router={appRoutes} />
    </ContactListContextProvider>
  );
}

export default App;
