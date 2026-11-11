import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I’m Nour, a recently graduated Computer Engineer passionate about building modern and impactful web applications. I specialize in Full-Stack development, with strong experience in Java, Spring Boot, Angular, and React. Through internships and academic projects, I’ve had the opportunity to work on real-world solutions, from scalable backend architectures and secure APIs to intuitive frontend experiences and AI-powered features. I’m always curious to learn, improve my skills, and turn ideas into clean, reliable, and meaningful digital products.
      
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
