import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import paths from './paths';
import { privateRoutes, publicRoutes } from './routes';

export default function AppRouter() {
  const user = false;

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
