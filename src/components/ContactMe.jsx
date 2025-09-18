import Avatar from "../img/Avatar.png";

const ContactMe = () => {
  return (
    <div
      className="contact-section col-lg-5 "
      data-aos="fade-right"
      data-aos-delay="400"
    >
      <div className="profile-image">
        <img src={Avatar} alt="Avatar" className="img-fluid" />
      </div>

      <div id="">
        <h4 className="mt-4 brush-title"><span>Contact Information</span></h4>
        <ul className="contact-info list-unstyled">
          <li>
            <i className="bi bi-envelope"></i>{" "}
            <a href="mailto:alicia.olivares.canales@gmail">
              alicia.olivares.canales@gmail.com
            </a>
          </li>
          <li>
            <i className="bi bi-geo-alt"></i> Madrid
          </li>
          <li>
            <i className="bi bi-linkedin"></i>{" "}
            <a href="https://www.linkedin.com/in/alicia-olivares-canales-b0a629141/">
              linkedin.com/in/alicia-olivares-canales-b0a629141/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
