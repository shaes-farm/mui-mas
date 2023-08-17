import React from 'react';

import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import HelpIcon from '@mui/icons-material/Help';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import LayersIcon from '@mui/icons-material/Layers';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import PieChartIcon from '@mui/icons-material/PieChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';

import {
  Messages,
  NavRoutes,
  NavRoute,
  Notifications,
} from '@shaes-farm/mui-mas';

export const mainRoutes: NavRoutes = {
  primary: [{
    slug: 'dashboard',
    icon: <DashboardIcon />,
    label: 'Dashboard',
    page: '#',
  },{
    slug: 'orders',
    icon: <StorefrontIcon />,
    label: 'Orders',
    page: '#',
  },{
    slug: 'customers',
    icon: <PeopleIcon />,
    label: 'Customers',
    page: '#',
  },{
    slug: 'reports',
    icon: <BarChartIcon />,
    label: 'Reports',
    page: '#',
  },{
    slug: 'integrations',
    icon: <LayersIcon />,
    label: 'Integrations',
    page: '#',
  }],
  secondary: [{
    slug: 'header-reports',
    label: 'Saved reports',
    page: '#',
  },{
    slug: 'reports/month',
    icon: <BarChartIcon/>,
    label: 'Current Month',
    page: '#',
  },{
    slug: 'reports/quarter',
    icon: <SsidChartIcon/>,
    label: 'Last Quarter',
    page: '#',
  },{
    slug: 'reports/year-end',
    icon: <PieChartIcon/>,
    label: 'Year-end sales',
    page: '#',
  }],
};

export const toolBarRoutes: NavRoutes = {
  primary: [{
    slug: 'messages',
    icon: <Messages count={2} router={(route: NavRoute) => console.log({route})} route={{
      slug: 'messages',
      icon: <React.Fragment />,
      label: 'Messages',
      page: '#',
    }} />,
    label: 'Messages',
    page: '#',
  },{
    slug: 'notifications',
    icon: <Notifications count={3} router={(route: NavRoute) => console.log({route})} route={{
      slug: 'notifications',
      icon: <React.Fragment />,
      label: 'Notifications',
      page: '#',
    }} />,
    label: 'Notifications',
    page: '#',
  }],
  secondary: [{
    slug: 'profile',
    icon: <AccountBoxOutlinedIcon fontSize='small' />,
    label: 'Profile',
    page: '#',
  },{
    slug: 'settings',
    icon: <SettingsIcon fontSize='small' />,
    label: 'Settings',
    page: '#',
  },{
    slug: 'help',
    icon: <HelpIcon fontSize='small' />,
    label: 'Help',
    page: '#',
  },{
    slug: 'div',
    icon: <React.Fragment />,
    label: '',
    page: '#',
  },{
    slug: 'signout',
    icon: <ExitToAppOutlinedIcon fontSize='small' />,
    label: 'Logout',
    page: '#',
  }],
  tertiary: [{
    slug: 'new-order',
    icon: <ShoppingCartIcon fontSize='small' />,
    label: 'New Order',
    page: '#',
  },{
    slug: 'new-customer',
    icon: <PersonIcon fontSize='small' />,
    label: 'New Customer',
    page: '#',
  },{
    slug: 'new-report',
    icon: <QueryStatsIcon fontSize='small' />,
    label: 'New Report',
    page: '#',
  },{
    slug: 'new-integration',
    icon: <JoinFullIcon fontSize='small' />,
    label: 'New Integration',
    page: '#',
  }],
};