import React from "react";
import Login from "./components/auth/login";
import ToDo from "./components/todo/todo.js";
import Header from "./components/header/header.js";

import "./app.scss"

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header />
        <Login />
        <ToDo />
      </>
    );
  }
}
