import Axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

class ContactService {
  addContact = async (contactInfo) => {
    const config = {
      method: "POST",
      url: `${BASE_URL}/users`,
      data: {
        ...contactInfo,
        createdAt: new Date().toISOString(),
        id: Date.now(),
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await Axios(config);
    return response.data;
  };

  updateContact = async (id, updateInfo) => {
    // todo id is not working on json place holder so we have to update only upto 10
    const config = {
      method: "PUT",
      url: `${BASE_URL}/users/10`, // ! bug
      data: updateInfo,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await Axios(config);
    return response.data;
  };

  deleteContact = async (id) => {
    const config = {
      method: "DELETE",
      url: `${BASE_URL}/users/${id}`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await Axios(config);
    return response.data;
  };
}

const contactService = new ContactService();

export default contactService;
