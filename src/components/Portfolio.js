import React from "react";
import "./../index.css";

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project 1 - Corona Tracker */}
        <div className="projects">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://covid19-virus-tracker.surge.sh/"
          >
            <div className="project-images" id="coronaTracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Corona Virus Tracker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/coronavirustracker"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://covid19-virus-tracker.surge.sh/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 - Shoe Store */}
        <div className="projects">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://nike-shoe-store.netlify.app/"
          >
            <div className="project-images" id="shoeStore"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Nike Shoe Store</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/shoeStore"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://nike-shoe-store.netlify.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 - Quiz App */}
        <div className="projects">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://online-quiz-app.surge.sh/"
          >
            <div className="project-images" id="quizApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Quiz Application</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Quiz-Application"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://online-quiz-app.surge.sh/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 - Explore matiari */}
        <div className="projects">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://explore-matiari.surge.sh/"
          >
            <div className="project-images" id="matiari"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Matiari Tourism Website</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/matiariWebsite"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://explore-matiari.surge.sh/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 - Expense Tracker */}
        <div className="projects">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://your-expense-tracker.surge.sh/"
          >
            <div className="project-images" id="expenseTracker"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Expense Tracker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/expenseTracker"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://your-expense-tracker.surge.sh/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/developer-junaid/"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
