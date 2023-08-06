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
  Notifications,
} from '../../../../src/components';

export const mainRoutes: NavRoutes = {
  primary: [{
    slug: 'today',
    icon: <WbTwilightIcon />,
    label: 'Today',
    page: <React.Fragment />
  },{
    slug: 'weather',
    icon: <ThermostatIcon/>,
    label: 'Weather',
    page: <React.Fragment />
  },{
    slug: 'calendar',
    icon: <CalendarMonthIcon/>,
    label: 'Calendar',
    page: <React.Fragment />
  },{
    slug: 'tasks',
    icon: <PlaylistAddCheckIcon/>,
    label: 'Tasks',
    page: <React.Fragment />
  },{
    slug: 'crops',
    icon: <GrassIcon/>,
    label: 'Crops',
    page: <React.Fragment />
  },{
    slug: 'livestock',
    icon: <PetsIcon/>,
    label: 'Livestock',
    page: <React.Fragment />
  },{
    slug: 'equipment',
    icon: <AgricultureIcon/>,
    label: 'Equipment',
    page: <React.Fragment />
  },{
    slug: 'inventory',
    icon: <WarehouseIcon/>,
    label: 'Inventory',
    page: <React.Fragment />
  },{
    slug: 'accounting',
    icon: <AccountBalanceIcon/>,
    label: 'Accounting',
    page: <React.Fragment />
  },{
    slug: 'market',
    icon: <StorefrontIcon/>,
    label: 'Market',
    page: <React.Fragment />
  },{
    slug: 'people',
    icon: <PeopleIcon/>,
    label: 'People',
    page: <React.Fragment />
  },{
    slug: 'farms',
    icon: <HomeWorkOutlinedIcon fontSize='small' />,
    label: 'Farms',
    page: <React.Fragment />
  },{
    slug: 'maps',
    icon: <MapIcon/>,
    label: 'Maps',
    page: <React.Fragment />
  }],
  secondary: [{
    slug: 'reports',
    icon: <QueryStatsIcon/>,
    label: 'Reports',
    page: <React.Fragment />
  },{
    slug: 'reports/month',
    icon: <BarChartIcon/>,
    label: 'Current Month',
    page: <React.Fragment />
  },{
    slug: 'reports/quarter',
    icon: <SsidChartIcon/>,
    label: 'Last Quarter',
    page: <React.Fragment />
  },{
    slug: 'reports/year-end',
    icon: <PieChartIcon/>,
    label: 'Year-end',
    page: <React.Fragment />
  }],
};

export const toolBarRoutes: NavRoutes = {
  primary: [{
    slug: 'messages',
    icon: <Messages />,
    label: 'Messages',
    page: <React.Fragment />
  },{
    slug: 'notifications',
    icon: <Notifications count={3} onNotify={() => console.log('Foo')} />,
    label: 'Notifications',
    page: <React.Fragment />
  }],
  secondary: [{
    slug: 'profile',
    icon: <AccountBoxOutlinedIcon fontSize='small' />,
    label: 'Profile',
    page: <React.Fragment />
  },{
    slug: 'settings',
    icon: <SettingsIcon fontSize='small' />,
    label: 'Settings',
    page: <React.Fragment />
  },{
    slug: 'help',
    icon: <HelpIcon fontSize='small' />,
    label: 'Help',
    page: <React.Fragment />
  },{
    slug: 'div',
    icon: <React.Fragment />,
    label: '',
    page: <React.Fragment />
  },{
    slug: 'signout',
    icon: <ExitToAppOutlinedIcon fontSize='small' />,
    label: 'Logout',
    page: <React.Fragment />
  }],
  tertiary: [{
    slug: 'new-cal',
    icon: <CalendarMonthIcon fontSize='small' />,
    label: 'New Event',
    page: <React.Fragment />
  },{
    slug: 'new-task',
    icon: <PlaylistAddCheckIcon fontSize='small' />,
    label: 'New Task',
    page: <React.Fragment />
  },{
    slug: 'new-crop',
    icon: <GrassIcon fontSize='small' />,
    label: 'New Crop',
    page: <React.Fragment />
  },{
    slug: 'new-livestock',
    icon: <PetsIcon fontSize='small' />,
    label: 'New Livestock',
    page: <React.Fragment />
  },{
    slug: 'new-equipment',
    icon: <AgricultureIcon fontSize='small' />,
    label: 'New Equipment',
    page: <React.Fragment />
  },{
    slug: 'new-inventory',
    icon: <WarehouseIcon fontSize='small' />,
    label: 'New Inventory',
    page: <React.Fragment />
  },{
    slug: 'new-person',
    icon: <PeopleIcon fontSize='small' />,
    label: 'New Person',
    page: <React.Fragment />
  },{
    slug: 'new-farm',
    icon: <HomeWorkOutlinedIcon fontSize='small' />,
    label: 'New Farm',
    page: <React.Fragment />
  }],
};