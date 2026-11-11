import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skillwill from "../../Assets/Projects/skillwill .png";
import skillwillDemo from "../../Assets/Projects/Demo PFE.mp4";
import dreamTimDemo from "../../Assets/Projects/drimteam.mp4";
import dreamTimPhoto from "../../Assets/Projects/drimteamphoto.png";
import genvid from "../../Assets/Projects/genvid.png";
import gradio from "../../Assets/Projects/gradio.png";
import requete from "../../Assets/Projects/requete.png";
import resultat from "../../Assets/Projects/resultat.png";
import formatb from "../../Assets/Projects/formatb.png";
import loginatb from "../../Assets/Projects/loginatb.png";
import serviceatb from "../../Assets/Projects/serviceatb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillwill}
              isBlog={false}
              title="SkillWill"
              isComputerMockup
              description="Internal learning platform created for teams to measure and strengthen their skills. It combines adaptive quizzes with an intelligent learning-path experience that adjusts recommendations to each learner's progress, strengths, and previous results."
              ghLink="https://github.com/NourMessioui14/Backend-SkillWill/tree/nour"
              videoLink={skillwillDemo}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={genvid}
              imagePaths={[genvid, gradio, requete, resultat]}
              isBlog={false}
              title="AI Video & Image Search"
              description="Developed a Gradio interface for personalized video generation, reducing processing time by 40% compared with the previous manual workflow. Automated Milvus deployment on a virtual machine with Ansible and built a PostgreSQL-based image similarity search engine returning the top five results for each query."
              ghLink="https://github.com/NourMessioui14/MilvusSimilarity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dreamTimPhoto}
              isComputerMockup
              isBlog={false}
              title="DreamTim"
              videoLink={dreamTimDemo}
              ghLink="https://github.com/NourMessioui14/ProjectManagementPi"
              description="Web application developed by a team of four using Scrum. DreamTim provides authentication and registration, project and sprint management, real-time collaboration, and claim management for three roles: administrator, project manager, and developer."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formatb}
              imagePaths={[formatb, loginatb, serviceatb]}
              isBlog={false}
              title="ATBNET"
              ghLink="https://github.com/NourMessioui14/AtbNet"
              description="Developed ATBNET, a secure online banking module with authentication and registration for ATBNET and ATB Mobile. The platform supports five key operations: transfers, balance consultation, transaction history, account management, and access to banking services such as international transfers and currency exchange."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
