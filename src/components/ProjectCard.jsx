function ProjectCard({ image, title, category, description, link }) {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="project-card-image" />

        <div className="project-card-content">
          <h5 className="project-title">{title}</h5>

          <p className="project-description">{description}</p>

          <div className="project-card-categories">
            {category.map((item) => (
              <span key={item} className="project-card-category me-2">
                {item === "web" ? "Web Development" : "Design"}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
