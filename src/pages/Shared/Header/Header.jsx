import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Image from 'react-bootstrap/Image';


const Header = () => {


    return (
        <Container>
            <div className="text-center">
                <Image src={logo} fluid />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p><small>{moment().format("dddd, MMMM D, YYYY")}</small></p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={50} pauseOnHover>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
           
        </Container>
    );
};

export default Header;