import React from "react";
import { useState, useEffect } from "react";
const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop && (
        <button
          style={{
            position: "fixed",
            bottom: "40px",
            right: "30px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default BackToTop;
