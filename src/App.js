import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import internalImage from "./images/welcome.jpg"; // Import internal image

function App() {
  console.log("React app started");

  // Name stored in variable
  const userName = "ALD";

  // Inline CSS for heading
  const headingStyle = {
    color: "blue",
    textAlign: "center",
    marginBottom: "15px"
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ width: "400px" }}>
        
        {/* Welcome Message */}
        <h2 style={headingStyle}>
          Welcome to React Learning, {userName}
        </h2>

        {/* Internal Image */}
        <img
          src={internalImage}
          alt="Internal"
          className="img-fluid mx-auto d-block mb-3"
          style={{ width: "200px" }}
        />

        {/* External Image */}
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
          alt="External"
          className="img-fluid mx-auto d-block mb-3"
        />

        {/* Description */}
        <p className="text-muted">
          This is your first card with images and styles!
        </p>

      </div>
    </div>
  );
}

export default App;