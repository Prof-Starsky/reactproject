import { Card } from "react-bootstrap";

interface SubheaderProps {
  title: string;
  children: string;
}

const Subheader: React.FC<SubheaderProps> = ({ title, children }) => {
  return (
    <Card
      className="my-2"
      style={{ maxWidth: "700px", height: "150px", color: "aqua" }}
    >
      <div className="d-flex align-items-center">
        <Card.Img
          src="vite.svg" // Path to the image in the public folder
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
          <Card.Subtitle className="text-muted">{children}</Card.Subtitle>
        </Card.Body>
      </div>
    </Card>
  );
};

export default Subheader;
