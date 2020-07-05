import React from 'react';

import { RouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
const Route: React.FC<Props> = ({ isPrivate = false, component: Component, ...props }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...props}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location }
              }}
            />
          )
      }}
    />
  );
}

export default Route;
