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
                        />
                    </Navbar.Brand>
                  

                    <Navbar.Toggle />

                    <Navbar.Collapse>
                        
                        <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="xmas-card-writer">Christmas Card Writer</Nav.Link>
                            <Nav.Link href="article-writer">Article Writer</Nav.Link>
                            <Nav.Link href="article-proofer">Article Proofer</Nav.Link>
                            <Nav.Link href="tweet-writer">Tweet Writer</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;

