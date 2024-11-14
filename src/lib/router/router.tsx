import { useRoutes } from 'react-router-dom';
import { RouterProps } from './router.types';

function Router(props: RouterProps) {
  const { routes } = props;
  const element = useRoutes(routes);
  return element;
}

export default Router;
