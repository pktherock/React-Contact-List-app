import { useState } from "react";
import { useContact } from "../../Contexts";
import { Container } from "../index";
import Contact from "./Contact";
import ContactFrom from "./ContactFrom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function ContactList() {
  const { contacts } = useContact();
  const [showContactForm, setShowContactForm] = useState(false);

  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  return (
    <Container>
      <ArrowUturnLeftIcon
        onClick={() => navigate("/")}
        className="h-12 w-12 p-3 font-bold bg-white border rounded-full shadow-xl hover:shadow-md hover:bg-gray-400"
      />
      {showContactForm && (
        <ContactFrom contactInfo={contact} setContact={setContact} />
      )}
      <div className="flex justify-between items-center my-2">
        <h1 className="text-center text-3xl font-bold my-2">Contact Lists</h1>
        <button
          type="button"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={() => {
            setShowContactForm(!showContactForm);
            contact && setContact(null);
          }}
        >
          {showContactForm ? "Cancel" : "Add Contact"}
        </button>
      </div>

      {contacts.length === 0 && (
        <h1 className="text-xl text-center font-medium">No Contact found!</h1>
      )}

      {contacts.map((contact) => (
        <Contact
          key={contact.createdAt}
          contactInfo={contact}
          setContact={() => {
            setContact(contact);
            setShowContactForm(true);
          }}
        />
      ))}
    </Container>
  );
}

export default ContactList;
