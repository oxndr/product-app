import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import paths from './paths';
import { privateRoutes, publicRoutes } from './routes';
import { Context } from '../index';

export default function AppRouter() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? (
    <BrowserRouter>
      <Switch>
        {privateRoutes.map(({ path, Component }) => {
          return <Route path={path} component={Component} exact key={path} />;
        })}
        <Redirect to={paths.home} exact />
      </Switch>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map(({ path, Component }) => {
          return <Route path={path} component={Component} exact key={path} />;
        })}
        <Redirect to={paths.login} exact />
      </Switch>
    </BrowserRouter>
  );
}
