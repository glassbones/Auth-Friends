import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/friends", formValues)
      .then((res) => {
        console.log(res);
        props.setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={formValues.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />
      <button>Add Friend</button>
    </form>
  );
};

export default FriendForm;
