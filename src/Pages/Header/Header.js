import "./Header.css";

import { Link } from "react-router-dom";
import JungEunImage from "../../Image/JungEun.png";

function Header() {
  return (
    <section className="Header w1400">
      <article className="Header_Logo">
        <Link to="/Main">
          <img src={JungEunImage} alt="JungEun" />
        </Link>
      </article>
      <ul className="Header_NavBox">
        <Link>
          <li className="Header_Box">Intro</li>
        </Link>
        <Link>
          <li className="Header_Box">About Me</li>
        </Link>
        <Link>
          <li className="Header_Box">Project</li>
        </Link>
        <Link>
          <li className="Header_Box">Contact</li>
        </Link>
      </ul>
    </section>
  );
}

export default Header;
