import Avatar from "../img/Avatar.png";

const ContactMe = () => {
  return (
    <div className="col-lg-5" data-aos="fade-right" data-aos-delay="400">
      <div className="profile-image">
        <img src={Avatar} alt="Avatar" className="img-fluid" />
      </div>

      <div id="contact-section">
        <h4 className="mt-4 brush-title"> Contact Information</h4>
        <ul className="contact-info list-unstyled">
          <li>
            <i className="bi bi-envelope"></i> alicia.olivares.canales@gmail.com
          </li>
          <li>
            <i className="bi bi-telephone-fill"></i> +34 646 29 32 46
          </li>
          <li>
            <i className="bi bi-geo-alt"></i> Madrid
          </li>
          <li>
            <i className="bi bi-linkedin"></i>{" "}
            linkedin.com/in/alicia-olivares-canales-b0a629141/
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
