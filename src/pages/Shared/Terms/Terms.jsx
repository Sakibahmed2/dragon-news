import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat minima commodi, sequi optio eveniet. Quo ipsam et deserunt voluptas in, neque aut, obcaecati error, recusandae minus suscipit earum omnis?</p>
            <p>Go back <Link to="/register" >Register</Link></p>
        </div>
    );
};

export default Terms;