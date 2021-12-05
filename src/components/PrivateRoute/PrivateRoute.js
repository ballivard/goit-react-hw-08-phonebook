import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/auth-selectors';

export const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};
