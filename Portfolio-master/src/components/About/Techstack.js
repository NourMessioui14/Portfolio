import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAngular,
  SiCss3,
  SiDotnet,
  SiGithub,
  SiGrafana,
  SiHtml5,
  SiJenkins,
  SiJira,
  SiMongodb,
  SiPhp,
  SiPrometheus,
  SiSonarqube,
  SiSpringboot,
  SiSymfony,
} from "react-icons/si";
import {
  FaBookOpen,
  FaCode,
  FaCubes,
  FaDatabase,
  FaShieldAlt,
  FaServer,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
  

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot size={32} color="#6DB33F" aria-label="Spring Boot" />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAngular size={32} color="#DD0031" aria-label="Angular" />
        <div className="tech-icons-text">Angular</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 size={32} color="#E34F26" aria-label="HTML5" />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 size={32} color="#1572B6" aria-label="CSS3" />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp size={32} color="#777BB4" aria-label="PHP" />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSymfony size={32} color="#111111" aria-label="Symfony" />
        <div className="tech-icons-text">Symfony</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet size={32} color="#512BD4" aria-label=".NET" />
        <div className="tech-icons-text">.NET</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCubes size={32} color="#4B5563" aria-label="Microservices" />
        <div className="tech-icons-text">Microservices</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer size={32} color="#2563EB" aria-label="REST API" />
        <div className="tech-icons-text">REST API</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase size={32} color="#2563EB" aria-label="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb size={32} color="#47A248" aria-label="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt size={32} color="#4D4D4D" aria-label="Keycloak" />
        <div className="tech-icons-text">Keycloak</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt size={32} color="#0F766E" aria-label="Clean Architecture" />
        <div className="tech-icons-text">Clean Architecture</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins size={32} color="#D24939" aria-label="Jenkins" />
        <div className="tech-icons-text">Jenkins</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube size={32} color="#4E9BCD" aria-label="SonarQube" />
        <div className="tech-icons-text">SonarQube</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCubes size={32} color="#1E88E5" aria-label="Nexus" />
        <div className="tech-icons-text">Nexus</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus size={32} color="#E6522C" aria-label="Prometheus" />
        <div className="tech-icons-text">Prometheus</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana size={32} color="#F46800" aria-label="Grafana" />
        <div className="tech-icons-text">Grafana</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode size={32} color="#7C3AED" aria-label="CI/CD" />
        <div className="tech-icons-text">CI/CD</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub size={32} color="#181717" aria-label="GitHub" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira size={32} color="#0052CC" aria-label="Jira" />
        <div className="tech-icons-text">Jira</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaUsers size={32} color="#0891B2" aria-label="Scrum et Agile" />
        <div className="tech-icons-text">Scrum / Agile</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTasks size={32} color="#059669" aria-label="Code review" />
        <div className="tech-icons-text">Code review</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBookOpen size={32} color="#92400E" aria-label="Documentation technique" />
        <div className="tech-icons-text">Documentation</div>
      </Col>
    

    
    </Row>
  );
}

export default Techstack;
