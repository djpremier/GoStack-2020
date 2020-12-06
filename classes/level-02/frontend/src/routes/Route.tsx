/* eslint-disable prettier/prettier */
import { ComponentType, FC } from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => (
        isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location }
              }}
          />
          )
      )}
    />
  );
};

export default Route;
