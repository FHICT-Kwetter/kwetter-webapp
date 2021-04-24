import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isTokenExpired } from "modules/shared/utils/auth";

interface ProtectedRouteProps extends RouteProps {}

const ProtectedRoute : React.FC<ProtectedRouteProps> = (props) => {

    const { component } = props;

    return (
        <Route {...props} render={() => isTokenExpired() ? <Redirect to='/' /> : component } />
    )
}

export default ProtectedRoute;
