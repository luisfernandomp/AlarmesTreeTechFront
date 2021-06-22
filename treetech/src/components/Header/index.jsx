import React from 'react';
import  { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logoTreeTech.png';
import './index.css';
import { Navbar, Nav, Figure } from 'react-bootstrap';

 const Header = () => {
    const history = useHistory();

    return (
        <Navbar bg="light" variant="light" className="menu" style={{zIndex : 999, boxShadow: '0px 1px 50px 10px rgba(0, 0, 0, 0.295)'}}>
            <Navbar.Brand href="#home">
            <Figure.Image
                width={60}
                height={60}
                alt="171x180"
                style={{marginLeft : 20}}
                src={Logo}
            />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/" style={{color: '#09bc8a'}}>Home</Nav.Link>
                <Nav.Link href="/Equipamento" style={{color: '#09bc8a'}}>Equipamentos</Nav.Link>
                <Nav.Link href="/Alarme" style={{color: '#09bc8a'}}>Alarmes</Nav.Link>
            </Nav>
        </Navbar>
    )

}

export default Header;