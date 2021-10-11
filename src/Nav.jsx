import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://fontmeme.com/permalink/210802/0e5833b24ba9e15405f0ad80200d28a2.png"
        alt="Netflix Logo"
        className="nav_logo"
      />

      <img
        src="data:image/png;base64,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"
        alt="Netflix Logo"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
