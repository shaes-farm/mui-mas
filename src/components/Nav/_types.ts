import React from "react"

/**
 * A navigation route contains all of the information to identify a reference to another page or site.
 */
export interface NavRoute {
  /**
   * A unique identifier of the route, typically kabob-case label used to identify route internally.
   */
  slug: string
  /**
   * A react node that optionally references a clickable icon for the route.
   */
  icon?: React.ReactNode
  /**
   * A label that may be used to identify the route or provide a tooltip for the icon.
   */
  label?: string
  /**
   * The page or site to navigate to upon clicking on the area of the route icon / label combination.
   */
  page: React.ReactNode
  /**
   * An optional hot-key combination that allows for keyboard navigation to the route.
   */
  hotkey?: string
}

/**
 * An array of navigation routes that can be passed to the Nav and other components.
 */
export type NavRoutes = NavRoute[];

/**
 * A model router used to perform the navigation among routes, this can be implemented using any standard or customized routers.
 * @param route A NavRoute object specifying the page or site to navigate to.
 */
export type NavRouter = (route: NavRoute) => void;
