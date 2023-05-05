import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      style={{ backgroundSize: '0', backgroundColor: '#299617' }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#fff' }}>
          Stock Exchange
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="./Home.js" style={{ color: '#fff' }}>
              Home
            </Nav.Link>
            <Nav.Link href="./About.js" style={{ color: '#fff' }}>
              More about ticker
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
