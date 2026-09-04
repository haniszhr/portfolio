import MainButton from "../components/MainButton";
import SectionTitle from "../components/Title";
import downloadicon from "../assets/download.png";
import { handleDownload, handlePopup, handleSubmit } from "../main";
import coding from "../assets/woman-coding.png";
function Home() {
  return (
    <section className="home">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4">
          <SectionTitle title="Overview" />
          <h1>
            <span className="text-white">Design meets</span>
            <br />
            <span className="section-title_text fw-bold">DEVELOPMENT.</span>
          </h1>

          <div className="text-white text-description">
            I bridge the gap between design and code by creating intuitive user
            interfaces and responsive websites.
          </div>

          <MainButton
            text="Download CV"
            icon={downloadicon}
            iconPosition="left"
            onClick={() => handleDownload(cvFile)}
          ></MainButton>
        </div>
        <div className="col-lg-6">
          <img src={coding} className="w-100" />
        </div>
      </div>
    </section>
  );
}

export default Home;
