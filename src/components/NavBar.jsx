import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{ padding: '1em', backgroundColor: '#f0f0f0' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/generate">Resume Generator</Link> |{' '}
      <Link to="/update">Update Resume</Link> |{' '}
      <Link to="/review">Job Spec Review</Link>
    </nav>
  );
}
