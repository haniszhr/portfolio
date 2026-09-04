import profileImage from "../assets/icon-hanis.png";
import map from "../assets/map-icon.png";
import github from "../assets/github.png";
import wsp from "../assets/wsp.png";
import mail from "../assets/mail.png";

export default function Header() {
  return (
    <>
      <div className="py-4">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="profile-header bg-linear-header">
              {/* Profile Image */}
              <img
                src={profileImage}
                className="profile-img"
                alt="Hanis Zahira"
              />
              <div className="d-flex flex-column">
                {/* Profile Info */}
                <div className="profile-info">
                  <h1 className="text-white mb-1">
                    Hanis Zahira Bt Mohd Zulkepli
                  </h1>

                  <div className="location">
                    <img src={map} width="18" alt="Location" />
                    <span className="text-white">Petaling Jaya, Malaysia</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="profile-links">
                  <a
                    href="https://github.com/haniszhr"
                    className="portfolio-link"
                  >
                    <div className="black-circle">
                      <img src={github} alt="Github" />
                    </div>
                    <span className="text-white">Github</span>
                  </a>

                  <a
                    href="https://wa.me/601155013353"
                    className="portfolio-link"
                  >
                    <div className="black-circle">
                      <img src={wsp} alt="Whatsapp" />
                    </div>
                    <span className="text-white">Whatsapp</span>
                  </a>

                  <a
                    href="mailto:haniszahira19@gmail.com"
                    className="portfolio-link"
                  >
                    <div className="black-circle">
                      <img src={mail} alt="Email" />
                    </div>
                    <span className="text-white">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
