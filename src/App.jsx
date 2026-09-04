import React from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import "./App.css";
function App() {
  const [activeTab, setActiveTab] = React.useState("home");

  return (
    <div className="app">
      <Header />

      <main>
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="container my-4">
          <div className="page-content">
            {activeTab === "home" && <Home />}

            {activeTab === "about" && <About />}

            {activeTab === "projects" && <Projects />}

            {activeTab === "services" && <Services />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
