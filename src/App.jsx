import React from "react";
import Nav from "./components/Layouts/Nav";
import MainDashboard from "./components/Layouts/MainDashboard";

function App() {
  return (
    <div className="container_app">
      <Nav/>
      <MainDashboard />
    </div>
  );
}

export default App;
