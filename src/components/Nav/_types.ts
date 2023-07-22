export interface NavRoute {
  slug: string
  icon: string | JSX.Element
  label: string
  page: string | JSX.Element
  hotkey?: string
}

export interface NavRoutes {
  primary: Array<NavRoute>
  secondary?: Array<NavRoute>
  tertiary?: Array<NavRoute>
}

export type NavRouter = (route: NavRoute) => void;
