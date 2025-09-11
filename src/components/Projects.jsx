const Projects = () => {
  return (
    <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
      <div className="projects-content">
        <div className="intro">
          <h4>
            <i className="bi bi-bookmark"></i> Projects
          </h4>
          <div className="project-div">
            <div className="project-title">
              {" "}
              <p className="title-paragraph">
                Monthly Expenses tracker,{" "}
                <i className="subtitle-text">Personal project</i>
              </p>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Alicia-OC/MonthlyExpenses"
                className="my-links"

              >
                Check the repo in Github
              </a>
            </div>
            <div lassName="project-body">
              {" "}
              <p className="project-description">
                Designed and developed a MERN stack application for tracking
                personal monthly expenses. Users can create accounts to manage
                expense records with a dedicated “month card” for each month,
                categorizing spending (e.g., subscriptions, bills, rent,
                groceries). Includes a monthly summary dashboard to provide a
                clear overview of savings and spending trends.
              </p>
              <p className="p-with-link">
                Coming soon: Implementing hashtag search and localizing into
                Spanish{" "}
                <a
                  target="_blank"
                  className="my-links"
                  rel="noopener noreferrer"
                  href="https://www.canva.com/design/DAGe7Bom7yI/sq2hJJ1HwOltWwn8eqv7ZA/view?utm_content=DAGe7Bom7yI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf352dd1221"
                >
                  Roadmap
                </a>
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="project-title">
              {" "}
              <p className="title-paragraph">
                Translations Requests Generator,{" "}
                <i className="subtitle-text">Personal project</i>
              </p>
             
            </div>

            <p className="project-description">
              (Built with messy code — coding quality has significantly improved
              in my new projects!) MERN stack app designed to automate the
              kick-off phase for translation workflows. Users can generate
              translation requests—which include details such as word count,
              deadline, or instructions—using predefined templates or by
              creating custom templates for reuse. Templates are securely stored
              in MongoDB with user-level access control, ensuring only the
              account owner and template creator can view or edit them after
              login.
            </p>
          </div>
          <div className="project-div">
            <div className="project-title">
              {" "}
              <p className="title-paragraph">
                Client rates calculator,{" "}
                <i className="subtitle-text">Work project</i>{" "}
              </p>{" "}
         
            </div>

            <p className="project-description">
              Created a lightweight tool (single HTML file) to calculate the
              optimal translation rate to request from clients. It analyzes
              vendor rates to determine the most frequent value and applies a
              markup to achieve the target margin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
