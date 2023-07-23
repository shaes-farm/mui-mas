import React from "react"

export interface NavRoute {
  slug: string
  icon?: React.ReactNode
  label?: string
  page: React.ReactNode
  hotkey?: string
}

export interface NavRoutes {
  primary: Array<NavRoute>
  secondary?: Array<NavRoute>
  tertiary?: Array<NavRoute>
}

export type NavRouter = (route: NavRoute) => void;
