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
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import {
  StyledInputBase,
  StyledSearchButton,
} from "../pages/HomePage/styled-component";

const pages = [
  { name: "Movies", link: "/movies" },
  { name: "TV Shows", link: "/shows" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [searchClicked, setSearchClicked] = React.useState(false);

  return (
    <AppBar position="static" elevation={0}>
      <Container
        disableGutters
        sx={{ maxWidth: "1300px", pl: "40px", pr: "40px" }}
        maxWidth={false}
      >
        <Toolbar disableGutters sx={{ height: "64px" }}>
          <Box component={Link} to="/" display="flex">
            <Box
              component="img"
              src={logo}
              alt="The Movie Database"
              sx={{ height: "20px" }}
            />
          </Box>
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.link}
                    sx={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "primary.main",
                    }}
                  >
                    {page.name}
                  </Typography>
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
                  key={page.name}
                  component={Link}
                  to={page.link}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Stack>
          </Box>

          <Stack direction="row" sx={{ alignItems: "center" }}>
            {/* <IconButton
              size="small"
              sx={{ color: "white", marginRight: "20px" }}
              aria-label="Create"
            >
              <AddIcon />
            </IconButton>
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: "white",
                fontSize: "14px",
                borderColor: "white",
                minWidth: "auto",
                paddingLeft: "6px",
                paddingRight: "6px",
                height: "26px",
                marginRight: "12px",
                "&:hover": {
                  bgcolor: "white",
                  color: "primary.main",
                },
              }}
            >
              EN
            </Button> */}
            {/* <Button
              size="small"
              sx={{ color: "white", fontSize: "16px", mr: "8px", gap: "8px" }}
            >
              <AccountCircleOutlinedIcon fontSize="small" />
              Login
            </Button> */}
            {/* <Button
              size="small"
              sx={{
                mr: "12px",
                color: "white",
                fontSize: "16px",
              }}
            >
              Join TMDB
            </Button> */}
            <IconButton
              size="small"
              sx={{ ml: "16px", color: "white" }}
              aria-label="Create"
              onClick={() => {
                setSearchClicked(!searchClicked);
              }}
            >
              {searchClicked ? (
                <CloseRoundedIcon sx={{ color: "#f00" }} />
              ) : (
                <SearchIcon sx={{ color: "#06b4e4" }} />
              )}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
      {searchClicked && (
        <Box
          sx={{
            width: "100%",
            height: "auto",
            padding: "10px",
            background: "#fff",
            color: "#000",
            position: "absolute",
            top: "64px",
            zIndex: "100",
            boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.25)",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <form method="get" action="/search">
              <StyledInputBase
                placeholder="Search for a movie, tv show, person......"
                inputProps={{ "aria-label": "search" }}
                name="keyword"
              />
              <StyledSearchButton type="submit">Search</StyledSearchButton>
            </form>
          </Box>
        </Box>
      )}
    </AppBar>
  );
}

export default Header;
