import {
  AppBar,
  Toolbar,
  Grid,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  row: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: "left",
    marginLeft: 0,
    paddingLeft: 0,
    flexDirection: "row"
  },
  container: {
    width: 1170,
    margin: "auto"
  },
  buttonFontSize: {
    fontSize: "11px",
    color: "#a1a1a1"
  },
  AppBar: {
    position: "relative",
    zIndex: theme.zIndex.drawer + 1,
    backgroundSize: "cover",
    flexDirection: "row",
    backgroundColor: "#121212"
  },
  mainLogo: {
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent"
    }
  },
  avatar: {
    height: "100%",
    borderRadius: 0
  },
  logoutButton: {
    background: "#e91e63",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",
    "&:hover": {
      background: "blue",
      boxShadow: "0px 2px 10px #888888"
    }
  }
}));
export const NavBar: () => JSX.Element = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = route => {
    return window.location.href = `/${route}`;
  };
  return (
    <div>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
              <Button className={classes.mainLogo}>
                Dan
              </Button>
            </Grid>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
            >
              <MenuItem>Contact me!</MenuItem>
              <MenuItem>My account</MenuItem>
            </Menu>
            <Button color="inherit" className={classes.buttonFontSize} onClick={() => handleClick('profile')}>
              Profile
            </Button>
            <Button color="inherit" className={classes.buttonFontSize} onClick={() => handleClick('contact')}>
              Contact me!
            </Button>

          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
};
