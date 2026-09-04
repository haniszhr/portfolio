import home from "../assets/home.png";
import about from "../assets/about.png";
import service from "../assets/service.png";
import project from "../assets/project.png";

function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="nav-bar">
      <button
        onClick={() => setActiveTab("home")}
        className={`nav-link ${activeTab === "home" ? "active" : ""}`}
      >
        <img src={home} alt="Home" />
        {activeTab === "home" && <span>Home</span>}
      </button>

      <button
        onClick={() => setActiveTab("about")}
        className={`nav-link ${activeTab === "about" ? "active" : ""}`}
      >
        <img src={about} alt="About" />
        {activeTab === "about" && <span>About</span>}
      </button>

      <button
        onClick={() => setActiveTab("projects")}
        className={`nav-link ${activeTab === "projects" ? "active" : ""}`}
      >
        <img src={project} alt="Projects" />
        {activeTab === "projects" && <span>Projects</span>}
      </button>

      <button
        onClick={() => setActiveTab("services")}
        className={`nav-link ${activeTab === "services" ? "active" : ""}`}
      >
        <img src={service} alt="Services" />
        {activeTab === "services" && <span>Services</span>}
      </button>
    </nav>
  );
}

export default Navigation;
