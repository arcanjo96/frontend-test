import React, { useState, useEffect } from "react";

import "./styles.css";

import api from "../../services/api";

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useState(() => {
    const token = localStorage.getItem("token");

    if (token != null) {
      history.push("/home");
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (email == "" || password == "") {
      return window.alert("Preencha os campos.");
    }

    try {
      const response = await api.post("/auth", { email, password });

      localStorage.setItem("token", response.data.token);

      history.push("/home");
    } catch (err) {
      alert("Falha ao tentar fazer login.");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input type="email" id="email" onChange={handleEmailChange} />

        <br />
        <br />

        <InputLabel htmlFor="password">Password</InputLabel>
        <Input type="password" id="password" onChange={handlePasswordChange} />

        <br />
        <br />

        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </div>
  );
}
