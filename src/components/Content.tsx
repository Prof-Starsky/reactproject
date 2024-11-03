import React from "react";
import Subheader from "./Subheader";
import { Card } from "react-bootstrap";

const Content: React.FC = () => {
  return (
    <Card
      className="my-2"
      style={{
        maxWidth: "1500px",
        maxHeight: "750px",
        width: "1000px",
        height: "500xpx",
        color: "blue",
      }}
    >
      <div className="p-3">
        <Subheader title="Subheader" />
        <Subheader title="Subheader" />
        <Card>
          <p className="mt-3">
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
          </p>
        </Card>
      </div>
    </Card>
  );
};

export default Content;
