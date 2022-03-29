import "./Navbar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebardata";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetIsSubmitted = () => {
    setIsSubmitted(false);
  };

  const showSidebar = () => setSidebar(!sidebar);

  const handleQueryRemoval = () => {
    resetIsSubmitted();
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div className="logo-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2 className="logo">Ebb</h2>
          </Link>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose className="closeout-icon" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path} onClick={handleQueryRemoval}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
