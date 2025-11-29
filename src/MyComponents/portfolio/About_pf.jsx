import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import "./About.css";

function About_pf() {
  return (
    <section id="about" className="about-section py-4 ">
      <div className="bg-accent-shape shape1"></div>
      <div className="bg-accent-shape shape2"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="about-card shadow-lg border-0 rounded-4 overflow-hidden">
            <Row className="align-items-center g-0">
              <Col md={5} className="about-image-col text-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="image-frame"
                >
                  <div className="angled-photo-wrapper">
                    <img
                      src="assets/arunaphoto.jpg"
                      alt="Aruna"
                      className="angled-photo"
                    />
                  </div>
                </motion.div>
              </Col>

              <Col md={7} className="about_cont">
                <Card.Body className="p-4 card_body">
                  <motion.h2
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="fw-bold mb-3 about-title text-gradient text-center"
                  >
                    About Me
                  </motion.h2>

                  <p className="about-sub">
                    Passionate <strong>Frontend Developer</strong> crafting
                    pixel-perfect, responsive, and high-performance web
                    experiences.
                  </p>

                  <p className="about-text mt-4">
                    With <strong>2 years of IT experience</strong> (and 4.10
                    years total professional background), I bring both technical
                    expertise and creative problem-solving to every project.
                    Skilled in{" "}
                    <strong>
                      React.js, JavaScript, Bootstrap, and Tailwind CSS
                    </strong>
                    , I focus on building dynamic and user-centric web
                    solutions.
                  </p>

                  <p className="about-text">
                    Currently expanding my knowledge into{" "}
                    <strong>MERN Stack</strong> development, blending front-end
                    creativity with full-stack capability.
                  </p>

                  <p className="about-text">
                    My early career in <strong>design and operations</strong>{" "}
                    strengthened my adaptability, communication, and
                    client-focused mindset — allowing me to transform complex
                    ideas into clean, functional web solutions.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="about-btn mt-4"
                    onClick={() => {
                      document.getElementById("projects")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    View My Work
                  </motion.button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}

export default About_pf;
