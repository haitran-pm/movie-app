import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.svg";
import Stack from "@mui/material/Stack";

const pages = ["Movies", "TV Show", "People", "More"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container
        disableGutters
        sx={{ maxWidth: "1300px", pl: "40px", pr: "40px" }}
        maxWidth={false}
      >
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            alt="The Movie Database"
            sx={{ height: "20px" }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "16px",
            }}
          >
            <Stack direction="row" spacing={1}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Stack>
          </Box>

          <Stack direction="row" spacing={1}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Create
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>EN</Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Login
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Join TMDB
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Search
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
