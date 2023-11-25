import React from "react";
import User from "../components/User";
import useFilter from "../hooks/useFilter";
function Search() {
  const [query, setQuery] = React.useState("");
  const people = [
    {
      id: 1,
      name: "Wade Cooper",
      username: "wadecooper",
      avatar:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      followers: 125000,
    },
    {
      id: 2,
      name: "Arlene Mccoy",
      username: "arlenemccoy",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      followers: 113900,
    },
    {
      id: 3,
      name: "Devon Webb",
      username: "devonwebb",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      followers: 220040,
    },
    {
      id: 4,
      name: "Tom Cook",
      username: "tomcook",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      followers: 124000,
    },
    {
      id: 5,
      name: "Tanya Fox",
      username: "tanyafox",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      followers: 2200,
    },
    {
      id: 6,
      name: "Hellen Schmidt",
      username: "hellenschmidt",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      followers: 30100,
    },
    {
      id: 7,
      name: "Caroline Schultz",
      username: "carolineschultz",
      avatar:
        "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      followers: 85000,
    },
    {
      id: 8,
      name: "Mason Heaney",
      username: "masonheaney",
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      followers: 125030,
    },
    {
      id: 9,
      name: "Claudie Smitham",
      username: "claudiesmitham",
      avatar:
        "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      followers: 65400,
    },
    {
      id: 10,
      name: "Emil Schaefer",
      username: "emilschaefer",
      avatar:
        "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      followers: 912030,
    },
  ];
  const { filteredData } = useFilter({
    data: people,
    filterBy: "username",
    filterValue: query,
  });
  return (
    <div className="max-w-xl py-6 mx-auto">
      <div className="flex items-center w-full gap-4 px-4 py-4 border rounded-xl bg-neutral-950 text-neutral-500 border-neutral-800">
        <label htmlFor="search">
          <svg
            width="20"
            height="20"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.7389 25.6531L28.8344 22.7449C28.2229 22.1327 27.3057 22.1327 26.6943 22.7449C26.0828 23.3571 26.0828 24.2755 26.6943 24.8878L29.5987 27.7959C30.0573 28.2551 30.0573 29.0204 29.5987 29.4796C29.1401 29.9388 28.3758 29.9388 27.9172 29.4796L23.3312 24.8878C23.6369 24.5816 23.9427 24.4286 24.2484 24.1224C26.5414 21.8265 27.9172 18.6122 27.9172 15.398C27.9172 12.0306 26.6943 8.96939 24.2484 6.67347C19.3567 1.77551 11.5605 1.77551 6.66879 6.67347C1.77707 11.5714 1.77707 19.3776 6.66879 24.2755C8.96178 26.5714 12.172 27.949 15.3822 27.949C17.2166 27.949 19.051 27.4898 20.5796 26.7245L25.6242 31.7755C26.3885 32.5408 27.6115 33 28.6815 33C29.7516 33 30.8217 32.5408 31.7389 31.7755C33.4204 29.9388 33.4204 27.1837 31.7389 25.6531ZM8.80892 21.8265C5.14013 18.1531 5.14013 12.1837 8.80892 8.66327C10.6433 6.82653 12.9363 5.90816 15.3822 5.90816C17.828 5.90816 20.121 6.82653 21.9554 8.66327C23.7898 10.5 24.707 12.7959 24.707 15.2449C24.707 17.6939 23.7898 20.1429 21.9554 21.8265C20.121 23.5102 17.828 24.5816 15.3822 24.5816C12.9363 24.5816 10.4904 23.6633 8.80892 21.8265Z"
              fill="currentColor"
            />
          </svg>
        </label>
        <input
          id="search"
          className="w-full text-white bg-transparent rounded-lg outline-none placeholder:text-neutral-500 placeholder:text-sm"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="py-8">
        {filteredData.map((person) => (
          <User
            key={person.id}
            name={person.name}
            username={person.username}
            avatar={person.avatar}
            followers={person.followers}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
