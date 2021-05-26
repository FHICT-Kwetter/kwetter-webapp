import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isLoggedIn, refreshToken } from "modules/shared/utils/auth";

interface ProtectedRouteProps extends RouteProps {
    Component: React.ElementType
}

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({ Component, ...props} : ProtectedRouteProps) => {

    if (!isLoggedIn()) {
        refreshToken();
    }

    return (
        <Route {...props} render={props => isLoggedIn() ? <Component { ...props } /> : <Redirect to={'/'} /> } />
    )
};

export default ProtectedRoute;
