import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemIcon';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MenuItem from '@mui/material/MenuItem';
import type { NavRoute } from '../Nav';

interface NewItemsMenuButtonProps {
  menu?: Array<NavRoute>
  router: (route: NavRoute) => void
}

export function NewItemsMenuButton(props: NewItemsMenuButtonProps) {
  const { menu, router } = props;
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
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={closeNewMenu}
      >
        {menu && menu.map((item) => (item.slug === 'div' ?
          <Divider key={Symbol(item.slug).toString()} />
        :
          <MenuItem key={item.slug} onClick={() => {
            closeNewMenu();
            router(item);
          }}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              {item.label}
            </ListItemText>
            {item.hotkey && <Typography variant="body2" color="text.secondary">
              {item.hotkey}
            </Typography>}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default NewItemsMenuButton;