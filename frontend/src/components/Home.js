import React from "react";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      <h2> Welcome to the page, {user?.name}</h2>
      <h3>This is the home page. You can view your profile or logout using the navbar above.</h3>
    </div>
  );
};

export default Home;