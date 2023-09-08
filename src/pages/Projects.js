import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import fashion from "../assets/projects/fashion.png";
import travel from "../assets/projects/travel.png";
import converter from "../assets/projects/converter.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashion}
              isBlog={false}
              title="StyleSymphony"
              description="StyleSumphony website is a fashion website about men and women clothing and accessories using API to fetch the data. It basically created using html, css, javascript, API. User can view product items, add to cart and checkout. This platform features a responsive interface using bootstrap and css."
              ghLink="https://cajesjonathan23.github.io/FinalMP2/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Laag Na"
              description="Laag Na website. Laag Na (Maglakbay sa Bohol) is a captivating travel website dedicated to exploring the enchanting province of Bohol in the Philippines. Through Laag Na, visitors will find a treasure trove of valuable travel information, and insightful guides to some of Bohol's most iconic attractions.  "
              ghLink="https://cajesjonathan23.github.io/MP1_WD76_CAJES/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={converter}
              isBlog={false}
              title="Conversion Calculator"
              description="Conversion Calculator can allow user input a value and choose a desired unit for convertion. User can select three convertion types, length, mass and volume."
              ghLink="https://cajesjonathan23.github.io/WD76_EXERCISE13_CAJES/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects