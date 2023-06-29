import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import "./style.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="https://github.com/erikchiodo">
          <BsGithub fontSize={35} style={{ marginRight: "15px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/erik-chiodo-96641453/"
        >
          <BsLinkedin fontSize={35} style={{ marginRight: "15px" }} />
        </a>
        <a href="https://instagram.com/mynoodpics">
          <BsInstagram fontSize={35} />
        </a>
      </div>
    </footer>
  );
}