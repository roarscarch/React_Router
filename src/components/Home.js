import React from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page yahan par link reload hoga</h1>
      <nav>
        <a href="/about">About</a>
        <a href="/subjects">Subjects</a>
        <a href="/class">Class</a>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Home;
