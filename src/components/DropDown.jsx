import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function DropDown({ children }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="px-6 py-4 rounded-lg text-neutral-400 hover:text-content">
          {children}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-48 mt-2 origin-bottom-right divide-x-2 rounded-lg shadow-lg bg-neutral-900 ring-1 ring-black/5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-white bg-neutral-800" : "text-gray-200"
                  } group flex w-full text-sm items-center rounded-md px-2 py-2`}
                >
                  Swith appearance
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-white  bg-neutral-800" : "text-gray-200"
                  } group flex w-full text-sm items-center rounded-md px-2 py-2`}
                >
                  About
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-white  bg-neutral-800" : "text-gray-200"
                  } group flex w-full text-sm items-center rounded-md px-2 py-2`}
                >
                  Report a problem
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-white  bg-neutral-800" : "text-gray-200"
                  } group flex w-full text-sm items-center rounded-md px-2 py-2`}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
