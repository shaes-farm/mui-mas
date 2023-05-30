import { NavRoute } from './_types';

export interface RouterProps {
  route: NavRoute
}

export function Router(props: RouterProps) {
  const { route } = props;
  return route.page;
}

export default Router;