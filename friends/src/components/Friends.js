import React, { useState, useEffect } from "react";
import Friend from "./Friend";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Friends List</h1>
      <FriendForm setFriends={setFriends}/>
      {friends.map((friend) => {
        return <Friend friend={friend} />;
      })}
    </div>
  );
};

export default Friends;
