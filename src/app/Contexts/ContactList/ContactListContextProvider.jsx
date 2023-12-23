import PropTypes from "prop-types";
import { ContactListProvider } from "./ContactListContext";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

function ContactListContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const addContact = (contactInfo) => {
    console.log("Contact Info", contactInfo);
  };

  const updateContact = (id, updatedContact) => {
    console.log("Contact Id", id);
    console.log("Updated Contact Info", updatedContact);
  };

  const deleteContact = (id) => {
    console.log("Deleted Contact id", id);
  };

  useEffect(() => {}, []);

  return (
    <ContactListProvider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-20">
          <RingLoader
            loading={loading}
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
            color="teal"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {children}
    </ContactListProvider>
  );
}

ContactListContextProvider.propTypes = {
  children: PropTypes.any,
};

export default ContactListContextProvider;
