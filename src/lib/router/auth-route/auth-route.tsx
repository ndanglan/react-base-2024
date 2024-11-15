import { AuthenticatedRouteProps } from './auth-route.types';
// import { useAuth } from '@components/providers/auth-provider';
// import authConfig from '@config/auth.config';
import { Outlet } from 'react-router-dom';

function AuthenticatedRoute(props: AuthenticatedRouteProps) {
  const { } = props;

  // const auth = useAuth();

  // if (!auth.isAuthenticated) {
  //   return <Navigate to={authConfig.redirectToIfNotAuthenticated} />;
  // }

  return <Outlet />;
}

export default AuthenticatedRoute;
