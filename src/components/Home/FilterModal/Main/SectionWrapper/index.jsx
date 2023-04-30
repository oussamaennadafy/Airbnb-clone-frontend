import React from "react";

function SectionWrapper({ children, title, className }) {
  return (
    <section className={`border-b border-gray px-2 py-8 ${className}`}>
      <h2 className="font-semibold text-xl mb-2">{title}</h2>
      {children}
    </section>
  );
}

export default SectionWrapper;
