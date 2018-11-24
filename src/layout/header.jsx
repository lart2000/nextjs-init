import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './header.sass';
function SearchAppBar(props) {

  return (
    <div className="c-search-app-bar">
      <AppBar position="static" className="c-app-bar">
        <Toolbar className="c-container-app-bar">
          <div className="c-menu">
			<IconButton className="c-menu__button" color="inherit" aria-label="Open drawer">
				<MenuIcon />
			</IconButton>
			<Typography className="c-menu__title" variant="h6" color="inherit" noWrap>
				Material-UI
			</Typography> 
		  </div>
          <div className="c-search">
            <div className="c-search__icon">
              <SearchIcon className="c-icon"/>
            </div>
            <InputBase
			  placeholder="Search…"
			  className="c-search__input"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default SearchAppBar;