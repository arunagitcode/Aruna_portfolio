import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Hero_section.css";

function Hero_section() {
  return (
    <section id="home" className="carousel_cont container-fluid">
      <Row className="align-items-center justify-content-center g-5 ">
        {/* ---- Text Section ---- */}
        <Col className="text-center text-md-start">
          <div className="hero-content">
            <h1>Frontend Developer</h1>
            <p>
              Hi, I'm <strong>Atchiyamma </strong>
              <strong>Frontend Developer </strong>2 years of relevant IT
              experience (4.10 years of overall professional experience) in
              building responsive, high-performance web applications using{" "}
              <strong>
                React.js, JavaScript, Bootstrap, and Tailwind CSS .
              </strong>
              <br />
              <br />
              Currently enhancing full-stack proficiency through <strong>MERN Stack</strong>
              (MongoDB, Express.js, React, Node.js) projects
            </p>
            <button className="btn-gradient mt-3 w-100">Know More</button>
          </div>
        </Col>

        {/* ---- Image Section ---- */}
        <Col md={5} className="text-center">
          <div className="hero-image-wrapper">
            <div className="rotating-border"></div>
            <div className="image-center">
              <img
                src="assets/arunaphoto.jpg"
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Hero_section;
