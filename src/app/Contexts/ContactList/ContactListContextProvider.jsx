import PropTypes from "prop-types";
import { ContactListProvider } from "./ContactListContext";
import { useState } from "react";
import { RingLoader } from "react-spinners";

import { alertService, contactService } from "../../Services";

function ContactListContextProvider({ children }) {
  // state to hold the contacts
  const [contacts, setContacts] = useState([]);

  // state to hold loading state
  const [loading, setLoading] = useState(false);

  // function to add contact
  const addContact = async (contactInfo) => {
    setLoading(true);
    try {
      const contact = await contactService.addContact(contactInfo);
      setContacts([...contacts, contact]);
      console.log("Added contact Info", contact);
      alertService.success("Contact added successfully!");
    } catch (error) {
      console.log("Error while adding contact", error);
      alertService.error("Adding contact failed!");
    } finally {
      setLoading(false);
    }
  };

  // function to update contact
  const updateContact = async (id, updateInfo) => {
    setLoading(true);
    try {
      const updatedContact = await contactService.updateContact(id, updateInfo);
      console.log("Updated contact info", updatedContact);
      setContacts((prevState) =>
        prevState.map((contact) => (contact.id === id ? updateInfo : contact))
      );
      alertService.success("Contact Updated successfully!");
    } catch (error) {
      console.log("Error while Updating contact", error);
      alertService.error("Update contact failed!");
    } finally {
      setLoading(false);
    }
  };

  // function to delete contact
  const deleteContact = async (id) => {
    const isConfirm = confirm("Are you sure? want to delete?");
    if (!isConfirm) return;
    setLoading(true);
    try {
      const data = await contactService.deleteContact(id);
      console.log("Deleted Info", data);
      setContacts((prevState) =>
        prevState.filter((contact) => contact.id !== id)
      );
      alertService.success("Contact deleted successfully!");
    } catch (error) {
      console.log("Error while deleting contact", error);
      alertService("Delete contact failed!");
    } finally {
      setLoading(false);
    }
  };

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
