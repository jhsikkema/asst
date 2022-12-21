import logo from '../favicon.png'
import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Container } from 'react-bootstrap'


class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant='light' sticky='top' expand="md" collapseOnSelect>
                <Container>   
                    <Navbar.Brand href="/">
                        <img
                        src={logo}
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        width={'125px'}
                        />
                    </Navbar.Brand>
                  

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        
                    <Nav >
                        
                        <Nav.Link href="xmas-card-writer" className="mx-2">Christmas Card Writer</Nav.Link>
                        <Nav.Link href="article-writer" className="mx-2">Article Writer</Nav.Link>
                        <Nav.Link href="article-proofer" className="mx-2">Article Proofer</Nav.Link>
                        <Nav.Link href="tweet-writer" className="mx-2">Tweet Writer</Nav.Link>
                    </Nav>

                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;

