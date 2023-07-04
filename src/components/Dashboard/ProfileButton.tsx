import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemIcon';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import MenuItem from '@mui/material/MenuItem';
import type { NavRoute, NavRouter } from '../Nav';

interface Profile {
  firstName: string;
  lastName: string;
  avatarUrl?: string;
}

export interface ProfileButtonProps {
  menu?: Array<NavRoute>;
  router: NavRouter;
  profile: Profile;
}

export function ProfileButton(props: ProfileButtonProps) {
  const { menu, router, profile } = props;
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const closeUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0, ml: 2 }}>
      <Tooltip title={`${profile.firstName} ${profile.lastName}`}>
        <Button
          aria-label="user profile"
          variant="text"
          color="inherit"
          size="large"
          onClick={openUserMenu}
          endIcon={<ArrowDropDownOutlinedIcon />}
          sx={{ p: 0 }}
        >
          <Avatar
            alt={`${profile.firstName} ${profile.lastName}`}
            src={profile.avatarUrl ?? ''}
            sx={{ width: 32, height: 32 }}
          />
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="profile-menu"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={closeUserMenu}
      >
        {menu && menu.map((item) => (item.slug === 'div' ?
          <Divider key={Symbol(item.slug).toString()} />
        :
          <MenuItem key={item.slug} onClick={() => {
            closeUserMenu();
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

export default ProfileButton;