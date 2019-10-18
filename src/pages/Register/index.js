import React, { useState } from "react";

import "./styles.css";

import api from "../../services/api";

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export default function Register({ history }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (username == "" || email == "" || password == "") {
      return window.alert("Preencha os campos.");
    }

    try {
      const response = await api.post("/users", { username, email, password });

      history.goBack();
    } catch (err) {
      alert("Falha ao tentar criar usuário.");
    }
  }

  function handleChangeUserName(event) {
    setUserName(event.target.value);
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
        <InputLabel htmlFor="nome">Nome</InputLabel>
        <Input type="nome" id="nome" onChange={handleChangeUserName} />
        <br />
        <br />
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input type="email" id="email" onChange={handleEmailChange} />
        <br />
        <br />
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input type="password" id="password" onChange={handlePasswordChange} />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Criar
        </Button>
        &nbsp;
        <Button type="submit" variant="contained" color="secondary">
          Voltar
        </Button>
      </form>
    </div>
  );
}
