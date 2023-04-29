import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoutes = ({ children }) => {
    const location = useLocation()
    console.log(location);

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" />
};

export default PrivetRoutes;