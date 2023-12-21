import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, NavLink } from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import Home from "./components/home.jsx";
import Menu from "./components/menu.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
function App() {
  return (
    <>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-success fw-semibold">
              React Retaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-router-nav" />
          <Navbar.Collapse id="basic-router-nav">
            <Nav className="me-auto justify-content-end w-100">
              <NavLink to="/" style={({isActive}) => ({color: isActive ? "green" : "black"})} className="p-2 active text-uppercase d-flex align-items-center text-decoration-none">home</NavLink>
              <NavLink to="/menu" style={({isActive}) => ({color: isActive ? "green" : "black"})} className="p-2 text-uppercase d-flex align-items-center text-decoration-none">menu</NavLink>
              <NavLink to="/about" style={({isActive}) => ({color: isActive ? "green" : "black"})} className="p-2 text-uppercase d-flex align-items-center text-decoration-none">about</NavLink>
              <NavLink to="/contact" style={({isActive}) => ({color: isActive ? "green" : "black"})} className="p-2 text-uppercase d-flex align-items-center text-decoration-none">contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="bg-body-tertiary">
        <p className="p-3 m-0 text-center text-capitalize">
          copyright &copy; mady by ahmad mayallo
        </p>
      </footer>
    </>
  );
}

export default App;
