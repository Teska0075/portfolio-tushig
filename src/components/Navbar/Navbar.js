import React from "react";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <motion.div
      initial={{ y: -45, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                marginLeft: "20px",
              }}
            >
              TUSHIG
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  ABOUT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/skills"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  SKILLS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/project"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  PROJECT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    marginRight: "20px",
                  }}
                >
                  CONTACT
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </motion.div>
  );
};

export default NavbarMenu;
