import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar'; // Import Avatar from Material-UI

function Profile() {
  const [userProfile, setUserProfile] = useState({
    username: 'KOLLIMARLA GNANESWAR',
    email: 'gnaneswar9676@gmial.com',
    // Add more profile data as needed
  });

  const profileStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={profileStyle}>
      <Avatar alt="User Avatar" src="/ONLINE-SDP/myapp/src/avatar.png" style={{ width: '100px', height: '100px' }} />
      <h1 style={headingStyle}>User Profile</h1>
      <div>
        <p><span style={labelStyle}>Username: </span> {userProfile.username}</p>
        <p><span style={labelStyle}>Email: </span> {userProfile.email}</p>
        {/* Add more profile information here */}
      </div>
    </div>
  );
}

export default Profile;
