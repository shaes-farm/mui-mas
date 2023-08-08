import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import GrassIcon from '@mui/icons-material/Grass';
import PetsIcon from '@mui/icons-material/Pets';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MapIcon from '@mui/icons-material/Map';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import {
  Messages,
  NavRoutes,
  NavRoute,
  Notifications,
} from '@shaes/mui-mas';

export const mainRoutes: NavRoutes = {
  primary: [{
    slug: 'today',
    icon: <WbTwilightIcon />,
    label: 'Today',
    page: '#',
  },{
    slug: 'weather',
    icon: <ThermostatIcon/>,
    label: 'Weather',
    page: '#',
  },{
    slug: 'calendar',
    icon: <CalendarMonthIcon/>,
    label: 'Calendar',
    page: '#',
  },{
    slug: 'tasks',
    icon: <PlaylistAddCheckIcon/>,
    label: 'Tasks',
    page: '#',
  },{
    slug: 'crops',
    icon: <GrassIcon/>,
    label: 'Crops',
    page: '#',
  },{
    slug: 'livestock',
    icon: <PetsIcon/>,
    label: 'Livestock',
    page: '#',
  },{
    slug: 'equipment',
    icon: <AgricultureIcon/>,
    label: 'Equipment',
    page: '#',
  },{
    slug: 'inventory',
    icon: <WarehouseIcon/>,
    label: 'Inventory',
    page: '#',
  },{
    slug: 'accounting',
    icon: <AccountBalanceIcon/>,
    label: 'Accounting',
    page: '#',
  },{
    slug: 'market',
    icon: <StorefrontIcon/>,
    label: 'Market',
    page: '#',
  },{
    slug: 'people',
    icon: <PeopleIcon/>,
    label: 'People',
    page: '#',
  },{
    slug: 'farms',
    icon: <HomeWorkOutlinedIcon fontSize='small' />,
    label: 'Farms',
    page: '#',
  },{
    slug: 'maps',
    icon: <MapIcon/>,
    label: 'Maps',
    page: '#',
  }],
  secondary: [{
    slug: 'reports',
    icon: <QueryStatsIcon/>,
    label: 'Reports',
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
    label: 'Year-end',
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
    slug: 'new-cal',
    icon: <CalendarMonthIcon fontSize='small' />,
    label: 'New Event',
    page: '#',
  },{
    slug: 'new-task',
    icon: <PlaylistAddCheckIcon fontSize='small' />,
    label: 'New Task',
    page: '#',
  },{
    slug: 'new-crop',
    icon: <GrassIcon fontSize='small' />,
    label: 'New Crop',
    page: '#',
  },{
    slug: 'new-livestock',
    icon: <PetsIcon fontSize='small' />,
    label: 'New Livestock',
    page: '#',
  },{
    slug: 'new-equipment',
    icon: <AgricultureIcon fontSize='small' />,
    label: 'New Equipment',
    page: '#',
  },{
    slug: 'new-inventory',
    icon: <WarehouseIcon fontSize='small' />,
    label: 'New Inventory',
    page: '#',
  },{
    slug: 'new-person',
    icon: <PeopleIcon fontSize='small' />,
    label: 'New Person',
    page: '#',
  },{
    slug: 'new-farm',
    icon: <HomeWorkOutlinedIcon fontSize='small' />,
    label: 'New Farm',
    page: '#',
  }],
};