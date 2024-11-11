import { useState } from "react";
import { Card } from "react-bootstrap";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
        >
          {title}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
};

const SidebarAccordion = () => {
  return (
    <Card
      className="m-3"
      style={{ maxWidth: "700px", height: "500px", color: "aqua" }}
    >
      <aside className="accordion bg-light p-3" id="sidebarAccordion">
        <AccordionItem
          title="We'll learn how to make Components like this"
          content="Content for Accordian 1"
        />
        <AccordionItem
          title="And like this, while keeping a nice format"
          content="We'll also have the ability to put text inside these drop down accordian folders"
        />
        <Card>
          <Card className="border rounded p-3">
            Stuff needed: <br></br>
            Laptop <br></br>
            VSCode Installed <br></br>
            ES7+ React/Redux/React-Native snippets Extension added <br></br>
            <br></br>
            Recommended: <br></br>
            Prettier - Code formatter Extension added<br></br>
            Prior Knowledge of basic HTML and CSS <br></br>
          </Card>
        </Card>
      </aside>
    </Card>
  );
};

export default SidebarAccordion;
