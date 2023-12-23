import { RingLoader } from "react-spinners";
import { useAxios } from "../../Hooks";
import User from "./User";

function UsersList() {
  const [loading, error, users] = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
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
    </div>
  );
}

export default UsersList;
