import SectionTitle from "../components/Title";
import MainButton from "../components/MainButton";
import Interact from "../assets/interactive.png";
import Arrow from "../assets/arrow-right.png";
import Translate from "../assets/translate.png";
import Pet from "../assets/pet-sitter.png";
import { handlePopup } from "../main";
function Services() {
  return (
    <>
      <SectionTitle title="Services" className="mb-0" />
      <section className="services">
        <p className="small-title">Here’s what I can help you with.</p>

        <h5 className="text-white">My Main Job</h5>
        <div className="row">
          <div className="col-12">
            <div className="blue-wrapper">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-column">
                    <h5 className="text-white">
                      UI Designer & Frontend Developer
                    </h5>
                    <div className="text-white">
                      I create responsive websites and intuitive user interfaces
                      that combine clean development with thoughtful design,
                      ensuring every digital experience is functional,
                      accessible, and visually engaging.
                    </div>

                    <MainButton
                      className="btn-fitcontent"
                      text="Learn More"
                      icon={Arrow}
                      iconPosition="right"
                      onClick={() => handlePopup()}
                    ></MainButton>
                  </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <img src={Interact} />
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-white my-4">Freelance Service</h5>
          <div className="col-lg-6 col-12 mb-4">
            <div className="blue-wrapper py-3">
              <div className="row align-items-center justify-content-center pt-0">
                <div className="col-lg-5">
                  <img src={Translate} className="w-100" />
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-column">
                    <h5 className="text-white">Translation</h5>
                    <div className="text-white">
                      Malay to English and vice versa translation services.
                      <ul>
                        <li>Documents</li>
                        <li>Web Content</li>
                        <li>Articles</li>
                      </ul>
                    </div>

                    <MainButton
                      className="btn-fitcontent"
                      text="Learn More"
                      icon={Arrow}
                      iconPosition="right"
                      onClick={() => handlePopup()}
                    ></MainButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="blue-wrapper py-3">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-5">
                  <img src={Pet} className="w-100" />
                </div>
                <div className="col-lg-7">
                  <div className="d-flex flex-column">
                    <h5 className="text-white">Pet Sitter</h5>
                    <div className="text-white">
                      Loving care for your pets while you’re away
                      <ul>
                        <li>Playtime</li>
                        <li>Feeding</li>
                        <li>Litter cleaning</li>
                      </ul>
                    </div>

                    <a
                      href="https://misshenz.github.io/PetSitter/"
                      className="main-button btn-fitcontent"
                    >
                      Learn More
                      <img src={Arrow} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
