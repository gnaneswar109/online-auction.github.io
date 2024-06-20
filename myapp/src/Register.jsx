import React, { useState } from "react";
import axios from "axios";
import { IconButton,Container} from '@mui/material';
import { Box } from '@mui/system';
import {Link} from 'react-router-dom';
const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/regpage', { name, email, pass })
      .then(result => {
        console.log(result);
        setRegistrationCompleted(true);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Container className="login-container" maxWidth="xs">
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" style={styles.label}>Full name</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" style={styles.input} placeholder="Full Name" />
        <label htmlFor="email" style={styles.label}>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" style={styles.input} />
        <label htmlFor="password" style={styles.label}>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" style={styles.input} />
        <button type="submit" style={styles.button}>Register</button>
      </form>

      {registrationCompleted && (
        <div style={styles.popup}>
          Registration completed!
        </div>
      )}

<Box>
      <Link to="/services" style={{ textDecoration: 'none' }}>
                <IconButton color="inherit">
                  Already have an account? Login Here!
                </IconButton>
              </Link>
              </Box>
    </div>
    </Container>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center vertically
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '0 auto',
    height: '400px', // Adjust the height
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  },
  button: {
    padding: '10px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
  popup: {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '10px 0',
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

export default Register;
