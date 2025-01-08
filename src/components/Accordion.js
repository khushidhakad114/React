import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: "Recommended (20)" },
    { title: "Starters (Chinese)" },
    { title: "Fried Rice (9)" },
  ];

  return (
    <div className="w-3/4 mx-auto mt-8">
      {sections.map((section, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium"
          >
            {section.title}
            <span
              className={`transform transition-transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 text-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
