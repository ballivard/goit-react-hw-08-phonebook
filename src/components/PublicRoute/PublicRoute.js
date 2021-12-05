import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/auth-selectors';

export const PublicRoute = ({
  children,
  // redirectTo,
  restricted = false,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const shouldRedirect = isLoggedIn && restricted;
  // console.log('shouldredirect', shouldRedirect);
  // console.log('isLoggedIn', isLoggedIn);
  // console.log('restricted',restricted);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};
