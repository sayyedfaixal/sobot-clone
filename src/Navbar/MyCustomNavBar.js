import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbarlogo.png";
import "./MyCustomNavBar.css";
function MyCustomNavBar() {
  return (
    <>
      <Navbar fixed="top" className="mycustomgreen">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./navbarlogo.png"
              className="d-inline-block align-top"
              alt="Sobot"
            />
          </Navbar.Brand>

          <div className="navigationLinks">
            <Nav className="me-auto">
              <Nav.Link
                id="navlinks"
                className="navlinkMargin"
                href="#features"
              >
                Features
              </Nav.Link>

              <Nav.Link
                id="navlinks"
                className="navlinkMargin"
                href="#integration"
              >
                Integration
              </Nav.Link>

              <Nav.Link id="navlinks" className="navlinkMargin" href="#pricing">
                Pricing
              </Nav.Link>

              <Nav.Link
                id="navlinks"
                className="navlinkMargin"
                href="#contact-us"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </div>
          <Button variant="success" id="loginButton" className="rounded-pill">
            Login
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default MyCustomNavBar;
