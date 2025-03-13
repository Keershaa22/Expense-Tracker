import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/expenses">View Expenses</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
