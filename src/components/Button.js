import React from 'react';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <div>
      <Link to ='sign-up' >
        <button className="btn">Sign Up</button>
      </Link>
    </div>
  )
}
