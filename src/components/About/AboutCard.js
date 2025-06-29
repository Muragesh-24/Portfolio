import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muragesh Nyamagoud </span>
            from <span className="purple"> Jamakhandi, India.</span>
            <br />
            I am currently purshuing my B.Tech in <span className="purple" >Indian institute of technology Kanpur</span>
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Outdoor sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by curiosity, guided by passion <br></br>I follow my heart to build what truly matters"{" "}
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
