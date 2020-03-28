import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1 className="home-heading" style={{ marginTop: "2.5vh" }}>
        WELCOME! to the Movies and TVShows Application!
      </h1>
      <img
        src="https://ak2.picdn.net/shutterstock/videos/3845792/thumb/7.jpg"
        alt=""
        style={{ height: "38vw", width: "50vw" }}
      />
    </div>
  );
}
export default Home;
