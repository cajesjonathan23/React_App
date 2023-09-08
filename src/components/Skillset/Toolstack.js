import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiXampp, // Replace SiHeroku with SiXampp
  SiVercel,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-label">Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-label">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp /> {/* Use SiXampp for XAMPP */}
        <p className="tech-label">XAMPP</p> {/* Update the label */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="tech-label">Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p className="tech-label">Netlify</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
