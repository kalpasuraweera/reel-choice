import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  MenuItem,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import { useTheme } from "@emotion/react";

const NavBar = () => {
  const { mode, changeTheme } = useContext(ThemeContext);
  const theme = useTheme();
  const navigation = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigation(path);
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ReelChoice
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box sx={{ width: 250, paddingTop: 2 }}>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={() => handleNavigation(item.path)}
                  >
                    <Typography textAlign="center">{item.text}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={changeTheme}>
                  <IconButton>
                    {mode === "light" ? <DarkMode /> : <LightMode />}
                  </IconButton>
                </MenuItem>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.text}
                onClick={() => handleNavigation(item.path)}
              >
                <Typography>{item.text}</Typography>
              </MenuItem>
            ))}
            <IconButton onClick={changeTheme}>
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
