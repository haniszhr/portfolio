import { useEffect, useRef } from "react";
import gsap from "gsap";

import "../styles/scrollTrigger.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
  "MySQL",
  "Bootstrap",
  "Tailwind",
  "Figma",
  "Illustrator",
  "Photoshop",
];

function SkillsSection() {
  const skillContainerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const container = skillContainerRef.current;
    const circle = circleRef.current;

    if (!container || !circle) return;

    const skillCards = container.querySelectorAll(".skill-card");

    const radius = 140;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    gsap.set(skillCards, {
      opacity: 0,
      scale: 0.5,
      y: 30,
    });

    // ==========================
    // MOBILE
    // ==========================

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      const timeline = gsap.timeline();

      // Draw circle automatically
      timeline.to(circle, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
      });

      // Pop up skills one by one
      timeline.to(
        skillCards,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.25,
          ease: "back.out(1.7)",
        },
        "-=1",
      );

      return () => {
        timeline.kill();
      };
    }

    // ==========================
    // DESKTOP
    // ==========================

    let progress = 0;

    const handleWheel = (event) => {
      const scrollAmount = event.deltaY * 0.0005;

      progress += scrollAmount;
      progress = Math.max(0, Math.min(1, progress));

      circle.style.strokeDashoffset = circumference - circumference * progress;

      skillCards.forEach((skill, index) => {
        const startPoint = index / skillCards.length;

        if (progress >= startPoint) {
          gsap.to(skill, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.3,
            overwrite: true,
          });
        } else {
          gsap.to(skill, {
            opacity: 0,
            scale: 0.5,
            y: 30,
            duration: 0.3,
            overwrite: true,
          });
        }
      });

      if (progress > 0 && progress < 1) {
        event.preventDefault();
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section id="skillSection">
      <div className="col-lg-7">
        <div className="skill-container" ref={skillContainerRef}>
          {/* ==========================
              SVG CIRCLE
          ========================== */}

          <svg
            className="skill-circle"
            width="500"
            height="500"
            viewBox="0 0 380 380"
          >
            {/* Background Circle */}
            <circle className="circle-bg" cx="230" cy="140" r="130" />

            {/* Animated Circle */}
            <circle
              ref={circleRef}
              className="circle-progress"
              cx="230"
              cy="140"
              r="130"
            />
          </svg>

          {/* ==========================
              CENTER
          ========================== */}

          <div className="circle-center">
            <h2>Skills</h2>
          </div>

          {/* ==========================
              SKILL CARDS
          ========================== */}

          {skills.map((skill, index) => (
            <div key={skill} className={`skill-card skill-${index}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
