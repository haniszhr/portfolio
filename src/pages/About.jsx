import MainButton from "../components/MainButton";
import SectionTitle from "../components/Title";
import briefcase from "../assets/briefcase.png";
import project from "../assets/project-icon.png";
import SkillsSection from "../components/SkillSection";
function About() {
  return (
    <section className="about">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <SectionTitle title="About Me" />
          <h1 className="text-white">A Little About Me</h1>

          <div className="text-white font-18">
            My journey began with a passion for creativity, which naturally led
            me into both design and web development.
          </div>
          <div className="text-white font-18">
            Today, I work as a Frontend Developer, building responsive and
            user-friendly websites while also contributing to UI design when
            needed. I enjoy turning ideas into clean, intuitive digital
            experiences that balance both functionality and aesthetics.{" "}
          </div>
          <div className="text-white font-18">
            I'm always eager to expand my skills, explore new technologies, and
            create products that are not only well-built but also enjoyable to
            use.{" "}
          </div>
          <div className="skill-summary flex-lg-row flex-column">
            <div className="left">
              <img src={briefcase} />
              <div className="d-flex flex-column">
                <h3 className="fw-bold text-white mb-0">2+</h3>
                <div className="text-white">Years Experiences</div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="right">
              <img src={project} />
              <div className="d-flex flex-column">
                <h3 className="fw-bold text-white mb-0">10+</h3>
                <div className="text-white">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <SkillsSection />
        </div>
      </div>
    </section>
  );
}

export default About;
