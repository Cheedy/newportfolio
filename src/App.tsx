import React, { useState, useEffect } from "react";
import FirstPage from "./pages/FirstPage";
import Projects from "./pages/Projects";
import projectsData from "./data/projects.json";

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleShowProjects = () => {
    setShowProjects(true);
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div
      className={`bg-gray-900 text-white ${
        showProjects ? "" : "h-screen overflow-hidden"
      }`}
    >
      <FirstPage onShowProjects={handleShowProjects} />
      {showProjects && <Projects projects={projects} />}
    </div>
  );
}

export default App;
