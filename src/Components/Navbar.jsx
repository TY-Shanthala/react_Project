import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Logo from "../utils/images/Logo.jpg";

const Navbar = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Links for navbar
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/media", label: "Media" },
    { href: "#contact", label: "Contact" },
    { href: "/formUpload", label: "UploadLetters" },
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ];

  const linkClasses =
    "text-gray-800 text-lg px-3 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-110 cursor-pointer";

  return (
    <header>
      <Box className="bg-gradient-to-r from-orange-400 via-white to-green-500 shadow-md fixed w-[100%] top-0 z-50">
        {/* bg-gradient-to-r from-blue-900 via-indigo-700 to-blue-900 sticky top-0 z-50 */}
        <Toolbar className="flex items-center ">
          {/* Logo with Hover Effect */}
          <Box className="flex items-center basis-[70%]">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-10 rounded-full mr-2 transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_10px_rgba(255,255,255,1)]"
            />
            <Typography
              variant="h6"
              className="text-blue-500 font-bold transition-all duration-300 ease-in-out cursor-pointer hover:scale-110"
            >
              PatriotPost
            </Typography>
          </Box>

          {/* Desktop Nav Links */}
          <Box
            className="basis-[20%]"
            sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}
          >
            {links.map((link, index) =>
              (link.label === "Upload Letters" && isLoggedIn) ||
              link.label !== "Upload Letters" ? (
                <Button
                  className="text-zinc-50 hover:text-orange-600 font-[800]"
                  key={index}
                  href={link.href}
                  sx={
                    {
                      // "&:hover": {
                      //   background: "linear-gradient(to right, #3B82F6, #9333EA)",
                      //   transform: "scale(1.1)",
                      // },
                    }
                  }
                >
                  {link.label}
                </Button>
              ) : null
            )}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Avatar */}
          <div className="basis-[10%] flex justify-end">
            <Avatar
              alt="User Avatar"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{
                width: 50,
                height: 50,
                border: "2px solid white",
                "&:hover": { boxShadow: "0px 0px 10px #fff" },
              }}
            />
          </div>
        </Toolbar>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {links.map((link, index) =>
              (link.label === "Upload Letters" && isLoggedIn) ||
              link.label !== "Upload Letters" ? (
                <ListItem button key={index} onClick={() => setMenuOpen(false)}>
                  <ListItemText primary={link.label} />
                </ListItem>
              ) : null
            )}
          </List>
        </Box>
      </Drawer>
      {/* <InternalNav/> */}
    </header>
  );
};

export default Navbar;
