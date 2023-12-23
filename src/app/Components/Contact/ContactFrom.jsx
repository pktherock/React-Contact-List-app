import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useContact } from "../../Contexts";
import { alertService } from "../../Services";

function ContactFrom({ contactInfo, setContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { addContact, updateContact } = useContact();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(name.trim() && email.trim() && phone.trim() && address.trim())) {
      return alertService.warn("All fields are mandatory!");
    }

    if (contactInfo) {
      updateContact(contactInfo.id, {
        ...contactInfo,
        name,
        email,
        phone,
        address,
      });
      setContact(null);
    } else {
      const contact = {
        name,
        email,
        phone,
        address,
      };
      addContact(contact);
    }

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  useEffect(() => {
    if (contactInfo) {
      const { name, email, phone, address } = contactInfo;
      setName(name);
      setEmail(email);
      setPhone(phone);
      setAddress(address);
    }
  }, [contactInfo]);

  return (
    <form
      onSubmit={handleSubmit}
      className="md:grid md:grid-cols-2 md:gap-4 shadow-lg border p-5 rounded my-4"
    >
      <div>
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Enter your name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Enter your email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Enter your phone number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="address"
        >
          Address
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Enter your address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></input>
      </div>
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {contactInfo ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
}

ContactFrom.propTypes = {
  contactInfo: PropTypes.object,
  setContact: PropTypes.func,
};

export default ContactFrom;
