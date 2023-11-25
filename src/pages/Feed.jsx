import React from "react";
import AddPost from "../components/AddPost";
import Thread from "../components/Post";

function Feed() {
  return (
    <div className="max-w-xl py-6 mx-auto">
      <AddPost />
      <div className="pt-6">
        <Thread />
        <Thread />
        <Thread />
        <Thread />
      </div>
    </div>
  );
}

export default Feed;
