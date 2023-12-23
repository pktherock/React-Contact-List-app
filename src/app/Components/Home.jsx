import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl py-24">
        <div className="inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]"></div>
        <div className="">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            React API CRUD demo
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            A React app to show how we can perform curd operation on any api end
            points using free api(jasonPlaceholder), Tailwind css, React spinners, React toastify, React router dom, Axios, heroicons and Context API
          </p>
          <div className="mt-3 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <button
              type="button"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Link to="/users">View Users</Link>
            </button>
            <button
              type="button"
              className="rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to="/contacts">View Contacts</Link>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
