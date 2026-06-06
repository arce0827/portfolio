import React from 'react';
import profilePic from './MIDI2026a.png'; // Adjust the path as necessary

function ProfilePic({ size }) {
  return (
    <div className="profile-pic-container" style={{ width: size, height: size }}>
      <img src={profilePic} alt="Profile" className="profile-pic" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

export default ProfilePic;