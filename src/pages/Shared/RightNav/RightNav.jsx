import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button variant="outline-primary" className='mb-3 w-100'> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary" className='w-100'> <FaGithub /> Login with GitHub</Button>
            <div className='mt-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div>
                <img className='thumbnail' src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;