import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const handleChange = (ev) => {
    if (ev.target.name == "email") {
      setUser({ ...user, email: ev.target.value });
    } else if (ev.target.name == "password") {
      setUser({ ...user, password: ev.target.value });
    } else if (ev.target.name == "name") {
      setUser({ ...user, name: ev.target.value });
    } else {
      setUser({ ...user, phone: ev.target.value });
    }
    console.log(user);
  };
  const checkForm = (ev) => {
    if (
      user.name == "" ||
      user.email == "" ||
      user.phone == "" ||
      user.password == ""
    ) {
      ev.preventDefault();
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="string"
          placeholder="Enter Your Name"
          value={user.name}
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={user.email}
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="string"
          placeholder="Enter Your Phone Number"
          value={user.phone}
          name="phone-number"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          checkForm(e);
        }}
      >
        Submit
      </Button>
    </Form>
  );
}
