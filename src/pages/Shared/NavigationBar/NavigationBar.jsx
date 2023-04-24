import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const NavigationBar = () => {

    const {user} = useContext(AuthContext)


    return (
        <Container>
            <Navbar className='mt-2' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/cetegory/0'>Home</Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {user ?
                                <Button variant="secondary">Sing Out</Button> :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;