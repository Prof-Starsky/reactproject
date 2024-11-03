import React from "react";
import { Card } from "react-bootstrap";

interface SubheaderProps {
  title: string;
}

const Subheader: React.FC<SubheaderProps> = ({ title }) => {
  return (
    <Card
      className="my-2"
      style={{ maxWidth: "700px", height: "150px", color: "aqua" }}
    >
      <div className="d-flex align-items-center">
        <Card.Img
          src="https://namelessrumia.heliohost.org/w/lib/exe/fetch.php?media=erk.png" // Path to the image in the public folder
          alt="React Logo"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
            margin: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
          }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="text-muted">Subheader</Card.Subtitle>
        </Card.Body>
      </div>
    </Card>
  );
};

export default Subheader;