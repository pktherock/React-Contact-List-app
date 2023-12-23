/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const ContactListContext = createContext({
  contacts: [
    {
      id: 1,
      name: "prashant",
      email: "p@gmail.com",
      phone: "9999999999",
      address: "Bihar, 8566565",
      createdAt: "2023-12-23T08:20:08.822Z"
    },
  ],
  addContact: (contactInfo) => {},
  updateContact: (id, updatedContact) => {},
  deleteContact: (id) => {},
});

export const ContactListProvider = ContactListContext.Provider;

const useContact = () => useContext(ContactListContext);

export default useContact;
