const ExperienceCertifications = () => {
  return (
    <div className="intro col-lg-7" data-aos="fade-left" data-aos-delay="300">
      <div id="experience">
        <h4>
         <i className="bi bi-briefcase"></i> Experience
        </h4>
        <p className="title-paragraph">
          Localization Project Manager and part-time Software tester,
          TransPerfect
        </p>
        <p>August 2022 – present | Madrid, España </p>
        <p>
          Current part-time role: Conduct UI/UX and functionality testing on a
          CAT tool. Identify and document issues in structured reports,
          categorizing findings as blockers, non-blockers, or verified features.
          Provide actionable insights to support development improvements and
          enhance user experience.
        </p>
        <p className="title-paragraph">Project Manager, Linguaserve</p>
        <p>August 2020 – August 2022 | Madrid</p>
      </div>
      <div id="certificates">
        {" "}
        <h4>
          <i className="bi bi-file-check"></i> Certifications
        </h4>
        <p className="title-paragraph">Coming soon: AWS practicioner</p>
        <p className="title-paragraph">The Complete Full-Stack Web Development Bootcamp</p>
        <p>Cert. UC-f65348bc-4df3-4f64-b12d-943caef3ce46</p>
        <p className="title-paragraph">React Testing Library with Jest / Vitest</p>
        <p>Cert. UC-2c728fd8-831c-4372-99de-3f913cf338a8</p>
      </div>
    </div>
  );
};

export default ExperienceCertifications;
