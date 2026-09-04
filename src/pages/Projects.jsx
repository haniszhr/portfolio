import SectionTitle from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import Pantai from "../assets/pantai-gp.png";
import Parkway from "../assets/parkway.png";
import Int from "../assets/ihh-int.png";
import Global from "../assets/ihh-global-microsit.png";
import MCIS from "../assets/mcis-landing.png";
import Cambodia from "../assets/ihh-cambodia.png";
import Runner from "../assets/klcm-desktop.webp";
import FAQ from "../assets/faq-section.png";
import BreastCancer from "../assets/phkl-breastcancer.png";
import HRSystem from "../assets/hr.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    title: "Pantai Hospital Landing Page",
    category: ["web"],
    image: Pantai,
    description:
      "Responsive Pantai Hospital landing page built with Bootstrap, HTML, CSS, and JavaScript.",
    link: "https://www.pantai.com.my/partner/gp-connect-programme",
  },
  {
    id: 2,
    title: "Parkway Lab Website Revamp",
    category: ["web"],
    image: Parkway,
    description:
      "UI/UX development for a complete website revamp using HTML, CSS, Bootstrap, and JavaScript.",
    link: "https://www.parkwaylabs.com.sg/",
  },
  {
    id: 3,
    title: "IHH International Revamp",
    category: ["web"],
    image: Int,
    description:
      "Frontend development for a healthcare website revamp using HTML, CSS, Bootstrap, and JavaScript.",
    link: "https://www.ihhmalaysia-international.com/",
  },
  {
    id: 4,
    title: "IHH Global Microsite",
    category: ["web", "design"],
    image: Global,
    description:
      "Designed and developed a responsive healthcare microsite using HTML, CSS, Bootstrap, and JavaScript.",
    link: "https://www.ihhmalaysia-international.com/",
  },
  {
    id: 5,
    title: "MCIS Landing Page",
    category: ["web"],
    image: MCIS,
    description:
      "Frontend development for a responsive healthcare landing page using HTML, CSS, Bootstrap, and JavaScript.",
    link: "https://www.mcis.my/our-products/life-insurance/golden-senior-care",
  },
  {
    id: 6,
    title: "IHH Cambodia Landing Page",
    category: ["web"],
    image: Cambodia,
    description:
      "Designed and developed a responsive healthcare microsite using HTML, CSS, Bootstrap, and JavaScript.",
    link: "https://www.ihhmalaysia-international.com/mhpp2026",
  },
  {
    id: 7,
    title: "IHH Int Maybank Promotion Page",
    category: ["web", "design"],
    image: Cambodia,
    description:
      "Developed a responsive landing using HTML, CSS, Bootstrap, and JavaScript.",
    link: "https://www.ihhmalaysia-international.com/promos/maybank-cards",
  },
  {
    id: 7,
    title: "IHH Corp Campaign Page",
    category: ["web", "design"],
    image: Runner,
    description:
      "Developed a responsive campaign page for IHH Malaysia Corporate Site.",
    link: "https://www.ihhhealthcare.com/my/ihhklscm",
  },
  {
    id: 8,
    title: "FAQ Section — UI Design & Development",
    category: ["web", "design"],
    image: FAQ,
    description:
      "Designed and developed the FAQ section of the website, creating a clean and user-friendly interface.",
    link: "https://www.ihhmalaysia-international.com/timberland-medicalcentre",
  },
  {
    id: 9,
    title: "Pantai Hospital-Breast Cancer Awareness",
    category: ["web"],
    image: BreastCancer,
    description:
      "Developed a responsive campaign page with a clean, engaging layout optimized for different screen sizes.",
    link: "https://www.pantai.com.my/kuala-lumpur/breast-cancer-awareness",
  },
  {
    id: 10,
    title: "HR System",
    category: ["web", "design"],
    image: HRSystem,
    description:
      "An HR management system developed during my internship to streamline employee leave applications and track work progress efficiently.",
    link: "https://easyhr.infy.click/index.php",
  },
];

function ProjectDisplay({ projects }) {
  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  // Desktop = 6 projects per slide
  // Mobile = 1 project per slide
  const isMobile = window.innerWidth <= 768;
  const projectsPerSlide = isMobile ? 1 : 6;

  const projectGroups = [];

  for (let i = 0; i < projects.length; i += projectsPerSlide) {
    projectGroups.push(projects.slice(i, i + projectsPerSlide));
  }

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation
      observer={true}
      observeParents={true}
    >
      {projectGroups.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="project-grid">
            {group.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
function Projects() {
  return (
    <section className="projects">
      <SectionTitle title="Project" />

      {/* TABS */}

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
          >
            All
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
          >
            Web Development
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="messages-tab"
            data-bs-toggle="tab"
            data-bs-target="#messages"
            type="button"
            role="tab"
          >
            Design
          </button>
        </li>
      </ul>

      {/* TAB CONTENT */}

      <div className="tab-content mt-4">
        {/* ALL */}

        <div className="tab-pane fade show active" id="home" role="tabpanel">
          <ProjectDisplay projects={projects} />
        </div>

        {/* WEB DEVELOPMENT */}

        <div className="tab-pane fade" id="profile" role="tabpanel">
          <ProjectDisplay
            projects={projects.filter((project) =>
              project.category.includes("web"),
            )}
          />
        </div>

        {/* DESIGN */}

        <div className="tab-pane fade" id="messages" role="tabpanel">
          <ProjectDisplay
            projects={projects.filter((project) =>
              project.category.includes("design"),
            )}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
