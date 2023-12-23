import PropTypes from "prop-types";
import { Card } from "../index";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useContact } from "../../Contexts";

function Contact({ contactInfo, setContact }) {
  const { id, name, email, phone, address, createdAt } = contactInfo;

  const { deleteContact } = useContact();

  return (
    <Card>
      <div className="flex px-5 justify-between">
        <div>
          <p className="text-xl font-medium">
            Name:{" "}
            <span className="font-normal text-lg text-gray-500">{name}</span>{" "}
          </p>
          <p className="text-xl font-medium">
            Email:{" "}
            <span className="font-normal text-lg text-gray-500">{email}</span>
          </p>
          <p className="text-xl font-medium">
            Phone:{" "}
            <span className="font-normal text-lg text-gray-500">{phone}</span>{" "}
          </p>
          <p className="text-xl font-medium">
            Address:{" "}
            <span className="font-normal text-lg text-gray-500">{address}</span>
          </p>
          <p className="text-xl font-medium">
            Added At:{" "}
            <span className="font-normal text-lg text-gray-500">
              {new Date(createdAt).toLocaleString()}
            </span>
          </p>
        </div>

        <div>
          <PencilSquareIcon onClick={setContact} className="w-8 h-8 hover:text-blue-500" />
          <TrashIcon onClick={() => deleteContact(id)} className="w-8 h-8 text-red-700 hover:text-red-400" />
        </div>
      </div>
    </Card>
  );
}

Contact.propTypes = {
  contactInfo: PropTypes.object.isRequired,
  setContact: PropTypes.func.isRequired
};

export default Contact;
