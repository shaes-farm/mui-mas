import React from 'react';
// import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

import type { NavRoute } from './Nav';
import Form from './Form';

export interface SearchInputProps {
  /**
   * The route to navigate to when search icon is clicked or enter is pressed.
   */
  route: NavRoute
  /**
   * The router used to perform the navigation.
   */
   router: (route: NavRoute) => void
}

/**
 * An input component with search and properties icons.
 */
export const SearchInput: React.FC<SearchInputProps> = ({router, route}) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // console.debug('Submit event handler called!');
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.debug({data});
    // TODO: Get search string and pass to router? Retrieve results? Or what?
    if (route) router(route);
  };

  return (
    <Form // component={Paper}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350 }}
      onSubmit={handleSubmit}
    >
      <Tooltip title={route.label ?? 'Search'}>
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search button">
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search keywords' }}
        name="search"
      />
      <Tooltip title="Refined Search">
        <IconButton sx={{ p: '10px' }} aria-label="search menu">
          <TuneIcon />
        </IconButton>
      </Tooltip>
    </Form>
  );
};

export default SearchInput;
