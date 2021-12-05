import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import './App.css';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import Container from './components/Container/Container';
import { AppBar } from './views/AppBar/AppBar';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { authSelectors } from './redux/auth/auth-selectors';

const HomePage = lazy(() => import('./components/Home/Home'));
const RegisterPage = lazy(() => import('./views/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./views/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Loading... Please wait</h1>
      ) : (
        <>
          <header>
            <AppBar />
          </header>
          <main>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                <PublicRoute exact path="/">
                  <HomePage />
                </PublicRoute>

                <PublicRoute
                  exact
                  path="/register"
                  redirectTo="/contacts"
                  restricted
                >
                  <RegisterPage />
                </PublicRoute>

                <PublicRoute
                  exact
                  path="/login"
                  redirectTo="/contacts"
                  restricted
                >
                  <LoginPage />
                </PublicRoute>

                <PrivateRoute path="/contacts" redirectTo="/" restricted>
                  <ContactsPage />
                </PrivateRoute>
              </Switch>
            </Suspense>
          </main>
        </>
      )}
    </Container>
  );
};

export default App;
