import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu, {MenuProps} from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemIcon';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import type { NavRoutes, NavRouter } from './Nav';

export interface NewItemsMenuButtonProps extends Partial<MenuProps> {
  /**
   * An array of routes rendered as a Menu component.
   * @see https://mui.com/material-ui/react-menu/
   */
  routes: NavRoutes;
  /**
   * The router used to perform the navigation.
   */
  router: NavRouter;
}

/**
 * Renders an Add icon button that displays a Menu of routes when clicked.
 */
export const NewItemsMenuButton: React.FC<NewItemsMenuButtonProps> = ({routes, router, ...menuProps}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openNewMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeNewMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 0, ml: 2 }}>
      <Tooltip title="New Items">
        <Button
          aria-label="new items"
          color="inherit"
          size="large"
          onClick={openNewMenu}
          endIcon={<ArrowDropDownOutlinedIcon/>}
          sx={{ p: 0 }}
          >
            <AddOutlinedIcon />
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="new-items-menu"
        {...menuProps}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeNewMenu}
      >
        {routes && routes.map((route) => (route.slug.match(/^divider-/u) ?
          <Divider key={Symbol(route.slug).toString()} />
        :
          <MenuItem key={route.slug} onClick={() => {
            closeNewMenu();
            router(route);
          }}>
            <ListItemIcon>
              {route.icon}
            </ListItemIcon>
            <ListItemText>
              {route.label}
            </ListItemText>
            {route.hotkey && <Typography variant="body2" color="text.secondary">
              {route.hotkey}
            </Typography>}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default NewItemsMenuButton;
