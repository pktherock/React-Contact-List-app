/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const ContactListContext = createContext({
  contacts: [{}],
  addContact: (contactInfo) => {},
  updateContact: (id, updatedContact) => {},
  deleteContact: (id) => {},
});

export const ContactListProvider = ContactListContext.Provider;

const useContact = () => useContext(ContactListContext);

export default useContact;
