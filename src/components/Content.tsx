import Subheader from "./Subheader";
import { Card } from "react-bootstrap";

const Content = () => {
  return (
    <Card
      className="m-2"
      style={{
        maxWidth: "1000px",
        maxHeight: "750px",
        width: "850px",
        height: "500xpx",
        color: "blue",
      }}
    >
      <div className="p-3">
        <Subheader
          title="We'll begin with the History of React and other Web Development method!"
          image="file1.png"
        >
          Presented by Bhavya
        </Subheader>
        <Subheader
          title="Then we'll going into the theory behind how React works!"
          image="file2.jpg"
        >
          Presented by David
        </Subheader>
        <Subheader
          title="Lastly, we'll learn how to make a website just like this from scratch!"
          image="file3.jpg"
        >
          Presented by Bentley
        </Subheader>
      </div>
    </Card>
  );
};

export default Content;
