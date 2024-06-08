"use client";
// import 'react-bootstrap/dist/react-bootstrap.min.js';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Chương trình đào tạo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={"/admin"} className="nav-link">
              Admin{" "}
            </Link>
            <NavDropdown title="Niên khóa" id="basic-nav-dropdown">
              <NavDropdown.Item>2021</NavDropdown.Item>
              <NavDropdown.Item>2022</NavDropdown.Item>
              <NavDropdown.Item>2023</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
