import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white sticky top-0 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <Link to="/">
              <HomeIcon className="h-6 w-6 cursor-pointer" />
            </Link>
          </span>
          <span className="font-bold">React Contact List app</span>
        </div>
        <div className="space-x-4 items-center hidden lg:inline-flex">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `inline-flex items-center ${isActive ? "text-green-400" : ""}`
            }
          >
            <UserCircleIcon className="h-8 w-8 text-blue-500 cursor-pointer hover:text-blue-400" />
            <span className="text-xl font-semibold">Users</span>
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `inline-flex items-center ${isActive ? "text-green-400" : ""}`
            }
          >
            <UsersIcon className="h-8 w-8 text-blue-500 cursor-pointer hover:text-blue-400" />
            <span className="text-xl font-semibold">Contacts</span>
          </NavLink>
        </div>
        <div className="hidden lg:block">
          <span className="font-bold pr-3">username</span>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Login
          </button>
        </div>
        <div className="lg:hidden">
          <Bars3Icon onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <Link to="/">
                        <HomeIcon className="h-6 w-6 cursor-pointer" />
                      </Link>
                    </span>
                    <span className="font-bold">React Fire Auth with CART</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="space-x-4 flex items-center justify-between px-5 py-2 shadow">
                  <NavLink
                    to="/users"
                    className={({ isActive }) =>
                      `inline-flex items-center ${
                        isActive ? "text-green-400" : ""
                      }`
                    }
                  >
                    <UserCircleIcon className="h-10 w-10 text-blue-500 cursor-pointer hover:text-blue-400" />
                    <span className="text-xl font-semibold">My orders</span>
                  </NavLink>

                  <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                      `inline-flex items-center ${
                        isActive ? "text-green-400" : ""
                      }`
                    }
                  >
                    <UsersIcon className="h-8 w-8 text-blue-500 cursor-pointer hover:text-blue-400" />
                    <span className="text-xl font-semibold">Contacts</span>
                  </NavLink>
                </div>
                {/* <span>username</span> */}
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
