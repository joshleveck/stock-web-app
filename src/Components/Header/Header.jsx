import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";

import SetHeader from "./hooks";
import AddWatchlistModal from "../TickerModal/AddWatchlistModal";

const Header = ({ handleAdd }) => {
  const { show, handleClose, handleShow } = SetHeader();
  return (
    <Navbar variant="dark" style={{ height: "70px" }} className="header">
      <Container>
        <Nav className="me-auto"></Nav>
        <Nav className="ml-auto">
          <Button variant="primary" onClick={handleShow}>
            <AiOutlinePlus />
          </Button>
          <AddWatchlistModal
            show={show}
            handleAdd={handleAdd}
            handleClose={handleClose}
          />
          <Nav.Link href="#" className="ml-2 pt-2">
            <BsCircleFill size={20} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
