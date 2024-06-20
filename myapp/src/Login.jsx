import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IconButton, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/login", { email, pass })
      .then((result) => {
        if (result.data === "success") {
          // Handle successful login
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="login-container" maxWidth="xs">
      <div className="login-card" style={styles.card}>
        <Typography variant="h4" component="h2" style={styles.title}>
          Login
        </Typography>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            style={styles.input}
          />
          <Box>
            <IconButton
              type="submit"
              style={styles.button}
              component={Link}
              to="/aboutus"
            >
              Login
            </IconButton>
          </Box>
        </form>
        <Box>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <IconButton color="primary" style={styles.linkButton}>
              Don't have an account? Register here!
            </IconButton>
          </Link>
        </Box>
      </div>
    </Container>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Center vertically
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
    margin: "0 auto",
    height: "100%", // Make the card take the full height of the container
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
  linkButton: {
    textDecoration: "none",
    backgroundColor: "transparent",
    border: "none",
    color: "blue",
    cursor: "pointer",
    fontSize: "14px", // Add this line to decrease the font size
  },
};

export default Login;
