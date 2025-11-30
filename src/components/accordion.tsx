import { useState, type ReactNode } from "react";
import "../styles/aboutme/accordion.css";

interface AccordionProp {
  children: ReactNode;
}

interface AccordionItemProp {
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function Accordion({ children }: AccordionProp) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = Array.isArray(children) ? children : [children];

  return (
    <div>
      {items.map((child, index) => {
        if (!child) return null;

        return (
          // @ts-ignore — safe because we know children are AccordionItem
          <child.type
            {...child.props}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            key={index}
          />
        );
      })}
    </div>
  )
}

export function AccordionItem({ title, content, isOpen=false, onToggle }: AccordionItemProp) {

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {title}
        <span className="accordion-arrow">⌄</span>
      </button>

      <div className="accordion-content-wrapper">
        <div className="accordion-content">{content}</div>
      </div>
    </div>
  );
}
