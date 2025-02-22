import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    alert("Signup successful! Please log in.");
    navigate("/login"); 
  };

  return (
    <div className="signup-container">
      <Container>
        <Card className="signup-box">
          <h2>Signup</h2>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button className="btn-custom" type="submit">
              Signup
            </Button>
          </Form>
          <a href="/login" className="already-account">Already have an account? Login</a>
        </Card>
      </Container>
    </div>
  );
};

export default Signup;
