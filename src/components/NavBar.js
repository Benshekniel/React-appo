import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import Brightness7Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness4";
import styled from "styled-components";
import logo from "./logoPic.png"; 

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
  &.active {
    font-weight: bold;
  }
`;

const StyledAppBar = styled(AppBar)`
  background-color: var(--navbar-color) !important;
`;

const Logo = styled.img`
  height: 40px; /* Adjust the height as needed */
  margin-right: 10px;
`;

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo src={logo} alt="Company Logo" />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          DEVLO
        </Typography>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about/mission">About</StyledNavLink>

        <StyledNavLink to="/contact-us/:department">Contact Us</StyledNavLink>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Brightness7Icon /> : <Brightness2Icon />}
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
