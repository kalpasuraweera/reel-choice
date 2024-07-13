import { useTheme } from "@emotion/react";
import {
  AppBar,
  Box,
  Icon,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
import { DarkMode, LightMode } from "@mui/icons-material";

const NavBar = () => {
  const { mode, changeTheme } = useContext(ThemeContext);
  const navigation = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">ReelChoice</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <MenuItem onClick={() => navigation("/")}>
            <Typography>Home</Typography>
          </MenuItem>
          <MenuItem onClick={() => navigation("/about")}>
            <Typography>About</Typography>
          </MenuItem>
          <MenuItem onClick={() => navigation("/contact")}>
            <Typography>Contact</Typography>
          </MenuItem>
          <IconButton onClick={changeTheme}>
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/about">About</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/contact">Contact</NavLink>
    //     </li>
    //     <IconButton onClick={changeTheme}>{mode}</IconButton>
    //   </ul>
    // </nav>
  );
};

export default NavBar;
