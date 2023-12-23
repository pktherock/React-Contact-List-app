import PropTypes from "prop-types";

import { Container, Card } from "../index";

function User({ userInfo }) {
  // console.log("User info", userInfo);
  const {
    address: { street, city, zipcode },
    company,
    email,
    name,
    phone,
    username,
    website,
  } = userInfo;

  return (
    <Container>
      <Card>
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
            Username:{" "}
            <span className="font-normal text-lg text-gray-500">
              {username}
            </span>{" "}
          </p>
          <p className="text-xl font-medium">
            Compony Name:{" "}
            <span className="font-normal text-lg text-gray-500">
              {company.name}
            </span>{" "}
          </p>
          <p className="text-xl font-medium">
            Address:{" "}
            <span className="font-normal text-lg text-gray-500">{`${street}, ${city}, ${zipcode}`}</span>
          </p>
          <p className="text-xl font-medium">
            Website:{" "}
            <span className="font-normal text-lg text-gray-500">{website}</span>{" "}
          </p>
        </div>
      </Card>
    </Container>
  );
}

User.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default User;
