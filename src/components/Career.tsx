import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>AmanBlaze</h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              Building <b>DartDL</b>, a popular video and audio downloader app, and 
              developing <b>ExamVijeta</b>—an AI-powered competitive exam 
              preparation platform featuring smart MCQs and PYQ integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>App Development Intern</h4>
                <h5>HexSoftwares</h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              Working on end-to-end mobile application development, focusing on 
              cross-platform innovation and modern UI/UX implementation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Volunteer</h4>
                <h5>Hackathons & Tech Events</h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              Actively volunteering and participating in various hackathons, 
              assisting teams and fostering a collaborative environment for 
              rapid innovation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Experience</h4>
                <h5>General</h5>
              </div>
              <h3>2+ YEARS</h3>
            </div>
            <p>
              Dedicated to mastering Flutter, MERN stack, and AI engineering, 
              with a track record of delivering functional, high-quality products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
