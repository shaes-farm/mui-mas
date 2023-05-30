export interface NavRoute {
  slug: string
  icon: JSX.Element
  label: string
  page: JSX.Element
  hotkey?: string
}

export interface NavRoutes {
  primary: Array<NavRoute>
  secondary?: Array<NavRoute>
  tertiary?: Array<NavRoute>
}