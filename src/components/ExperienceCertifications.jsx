const ExperienceCertifications = () => {
  return (
    <div className="intro col-lg-7" data-aos="fade-left" data-aos-delay="300">
      <div id="experience">
        <h4>
          <i className="bi bi-briefcase"></i> Experience
        </h4>
        <div className="software-eng">
          {" "}
          <p className="title-paragraph">
            Software developer & Product Manager
          </p>
          <p>October 2025 – present | Madrid, España </p>
          <h5>As a Software Developer</h5>
          <ul>
            <li>
              Build and ship frontend features using React, JavaScript, and
              modern web technologies
            </li>
            <li>
              Conduct technical code reviews to maintain code quality and
              engineering best practices
            </li>
            <li>
              Develop responsive, accessible user interfaces with HTML5, CSS3,
              and component libraries
            </li>
            <li>
              Implement state management solutions
            </li>
            <li>Integrate RESTful APIs and manage asynchronous data flow</li>
            <li>
              Optimize application performance and bundle size for improved user
              experience
            </li>
            <li>Collaborate with backend teams to design and consume APIs</li>
            <li>
              Participate in agile ceremonies and contribute to technical
              architecture decisions
            </li>
          </ul>
          <h5>As a Product Manager</h5>
          <ul>
            <li>
              Lead sprint planning and coordination with cross-functional
              development teams and developer lead, driving consistent on-time
              feature delivery
            </li>

            <li>
              Bridge technical and business stakeholders to translate
              requirements into actionable product specifications and align
              priorities
            </li>
            <li>
              Synthesize stakeholder feedback and market insights to guide
              data-driven product decisions
            </li>
            <li>
              Partner with business owners to shape the product roadmap,
              prioritizing features that balance business impact, user needs,
              and strategic objectives
            </li>
            <li>
              Make UI/UX and product design decisions to ensure the application
              maintains a user-friendly and polished experience
            </li>

            <li>
              Identify and create tickets for design inconsistencies or
              usability issues, providing clear specifications and visual
              guidance to development teams
            </li>
          </ul>
        </div>
        <div className="loc-pm">
          <p className="title-paragraph">
            Localization Project Manager and part-time Software tester,
            TransPerfect
          </p>
          <p>August 2022 – October 2025 | Madrid, España </p>
          <p>
            Current part-time role: Conduct UI/UX and functionality testing on a
            CAT tool. Identify and document issues in structured reports,
            categorizing findings as blockers, non-blockers, or verified
            features. Provide actionable insights to support development
            improvements and enhance user experience.
          </p>
        </div>
      </div>
      <div id="certificates">
        {" "}
        <h4>
          <i className="bi bi-file-check"></i> Certifications
        </h4>
        <p className="title-paragraph">Coming soon: AWS practicioner</p>
        <p className="title-paragraph">
          The Complete Full-Stack Web Development Bootcamp
        </p>
        <p>Cert. UC-f65348bc-4df3-4f64-b12d-943caef3ce46</p>
        <p className="title-paragraph">
          React Testing Library with Jest / Vitest
        </p>
        <p>Cert. UC-2c728fd8-831c-4372-99de-3f913cf338a8</p>
      </div>
    </div>
  );
};

export default ExperienceCertifications;
