import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Search, BellFill } from "react-bootstrap-icons";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const event = new CustomEvent("searchMovies", { detail: searchQuery });
    window.dispatchEvent(event);
  };

  return (
    <header className="bg-dark w-100">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              height="40"
              src="/public/netflix_logo.png"
              alt="Netflix logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#tv-shows" className="fw-bold text-light">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#movies" className="text-light">
                Movies
              </Nav.Link>
              <Nav.Link href="#recently-added" className="text-light">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#my-list" className="text-light">
                My List
              </Nav.Link>
            </Nav>
            <Form
              className="d-flex align-items-center"
              onSubmit={handleSearchSubmit}
            >
              <Search
                className="mx-3"
                color="white"
                size={24}
                style={{ cursor: "pointer" }}
                onClick={handleSearchToggle}
              />
              {showSearch && (
                <FormControl
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
              <img
                height="40"
                src="/public/kids_icon.png"
                alt="kids-icon"
                className="mx-3"
              />
              <BellFill className="mx-3" color="white" size={24} />
              <div className="d-flex align-items-center mx-3">
                <img height="40" src="/public/avatar.jpg" alt="avatar" />
                <NavDropdown
                  img
                  height="40"
                  src="/public/avatar.jpg"
                  alt="avatar"
                  id="genre-dropdown"
                  className="ms-3 bg-dark text-light"
                >
                  <NavDropdown.Item href="#">Preferiti</NavDropdown.Item>
                  <NavDropdown.Item href="#">Profilo</NavDropdown.Item>
                  <NavDropdown.Item href="#">Impostazioni</NavDropdown.Item>
                  <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="pt-2 mt-1">
        <div className="d-flex align-items-start">
          <h2 className="text-light fs-2 fw-bold">Best Movie Sagas</h2>
          <NavDropdown
            title="Genres"
            id="genre-dropdown"
            className="px-3 py-2 bg-dark text-light d-none d-lg-block"
          >
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#">Sci-Fi</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </header>
  );
};

export default Header;
