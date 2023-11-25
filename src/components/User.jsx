import React from "react";
import { useState } from "react";
function User({ name, avatar, username, followers }) {
  const [followed, setFollowed] = useState(false);
  const formatNumber = (number) => {
    if (number > 999 && number < 1000000) {
      return (number / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (number > 1000000) {
      return (number / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (number < 900) {
      return number; // if value < 1000, nothing to do
    }
  };
  return (
    <div className="py-2 border-b border-neutral-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full ">
            <img
              src={avatar}
              alt="figma"
              className="object-cover w-8 h-8 rounded-full"
            />
          </div>
          <div>
            <h2>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:underline"
              >
                {username}
              </a>
            </h2>
            <p className="text-xs text-neutral-400">{name}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => setFollowed((prev) => !prev)}
            className="px-6 py-2 text-sm font-semibold text-white bg-transparent border rounded-md border-neutral-700"
          >
            {followed ? "Following" : "Follow"}
          </button>
        </div>
      </div>
      <div className="py-2 pl-12">
        <p className="text-sm text-neutral-300">
          {formatNumber(followers)} followers
        </p>
      </div>
    </div>
  );
}

export default User;
