import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import Loading from '../Loading/Loading';

// rendering require authentication component here
const RequireAuth = ({ children }) => {
    // integration of react firebase hooks
    const [user, loading] = useAuthState(auth);

    // integration of react hooks
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;