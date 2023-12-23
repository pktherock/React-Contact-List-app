import { RingLoader } from "react-spinners";
import { useAxios } from "../../Hooks";
import User from "./User";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { Container } from "../index";

function UsersList() {
  const [loading, error, users] = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );

  const navigate = useNavigate();

  return (
    <Container>
      <ArrowUturnLeftIcon
        onClick={() => navigate("/")}
        className="h-12 w-12 p-3 font-bold bg-white border rounded-full shadow-xl hover:shadow-md hover:bg-gray-400"
      />
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

      {error && (
        <h1 className="text-3xl text-center font-semibold">
          Error while fetching users
        </h1>
      )}

      <h1 className="text-center font-bold text-3xl my-2">User Lists</h1>

      {users.map((user) => (
        <User key={user.id} userInfo={user} />
      ))}
    </Container>
  );
}

export default UsersList;
