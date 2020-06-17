import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();


  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const login = (e) => {
    e.preventDefault();

    axios
        .post("http://localhost:5000/api/login", credentials)
        .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.payload);
            history.push('/friends')
        })
        .catch((err) => console.log(err));

  };

  return (
    <form onSubmit={login}>

        <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
        />

        <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
        />

        {isLoading && ( <Loader type="Rings" color="purple" height={80} width={80} /> )}

        {/* if error, display error */}
        {error && <div> {error} </div>}

      <button>Log In</button>

    </form>
  );
};

export default Login;
