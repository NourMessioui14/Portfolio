import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nour Messioui</span>{" "}
            from <span className="purple">Tunis, Tunisia</span>.
            <br />
            I’m a <span className="purple">Full-Stack Java/Angular Engineer</span>,
            currently working as an{" "}
            <span className="purple">ERP & Management Systems Functional Consultant</span>{" "}
            at <span className="purple">Centrale de Recouvrement des Créances</span>.
            <br />I hold an Engineering degree in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">ESPRIT</span>.
            <br />
            <br />
            I specialize in building reliable, scalable applications with{" "}
            <span className="purple">Java/Spring Boot</span> and{" "}
            <span className="purple">Angular</span>, with experience in
            microservices, DevOps and AI integration.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Football ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Build things that are reliable, scalable, and useful
            </li>
          </ul>

        
          <footer className="blockquote-footer">Nour</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;