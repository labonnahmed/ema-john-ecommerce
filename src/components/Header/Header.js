import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <Navbar bg="dark" variant="dark" style={{width:'100%'}}>
                <Container>
                {/* <Navbar.Brand href="/home">ema-John</Navbar.Brand> */}
                <Nav className="mx-auto d-block d-flex">
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/review">Order Review</Nav.Link>
                    <Nav.Link href="/inventory">Manage Inventory</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;