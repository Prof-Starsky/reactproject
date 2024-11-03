import React, { useState } from "react";
import { Card } from "react-bootstrap";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
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

const SidebarAccordion: React.FC = () => {
  return (
    <Card
      className="my-2"
      style={{ maxWidth: "700px", height: "500px", color: "aqua" }}
    >
      <aside className="accordion bg-light p-3" id="sidebarAccordion">
        <AccordionItem
          title="This is an accordian tab!"
          content="Content for Accordian 1"
        />
        <AccordionItem
          title="This is also an accordian tab!"
          content="Content for Accordian 2"
        />
      </aside>
    </Card>
  );
};

export default SidebarAccordion;
