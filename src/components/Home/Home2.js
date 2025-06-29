import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
      I'm deeply passionate about <b className="purple">building impactful products</b> and taking ideas from scratch to reality.
      <br />
      <br />I have handson experience with
      <i>
        <b className="purple"> Mern, JavaScript, Go, and Python. </b>
      </i>
      <br />
      <br />
      My main areas of interest include&nbsp;
      <i>
        <b className="purple">full-stack development</b>, as well as emerging fields like{" "}
        <b className="purple">AI/ML and DevOps</b>.
      </i>
      <br />
    
     

      <br />
      I love building mainly backend systems using <b className="purple">Node.js , Golango</b> and
   
      , and I'm currently diving deeper into tools like <b className="purple">Devops , Systems , Cloud</b>.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Muragesh-24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
         
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muragesh-nyamagoud-459166249"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iam.muragesh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
