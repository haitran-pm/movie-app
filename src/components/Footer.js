import React from "react";
import { Box, Button, Stack, Typography, Container } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import logo_footer from "../assets/logo-footer.svg";

const Hyperlink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #06b4e4;
    transition-duration: 0.3s;
  }
`;
const FooterHeadline = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;
const FooterListItem = styled(ListItem)`
  padding: 0;
`;

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        paddingY: "80px",
      }}
    >
      <Container
        disableGutters
        sx={{ maxWidth: "1300px", pl: "40px", pr: "40px" }}
        maxWidth={false}
      >
        <Stack direction="row" spacing={6} sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "end",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={logo_footer}
              alt="The Movie Database"
              sx={{
                width: "170px",
                position: "absolute",
                top: "-30px",
                right: "0",
              }}
            />
            <Button
              sx={{
                color: "#06b4e4",
                bgcolor: "white",
                paddingX: "16px",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              JOIN THE COMMUNITY
            </Button>
          </Box>
          <Box>
            <FooterHeadline variant="h6">THE BASICS</FooterHeadline>
            <List>
              <FooterListItem>
                <Hyperlink to="#">About TMDB</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">Contact Us</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">Support Forums</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">API</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">System Status</Hyperlink>
              </FooterListItem>
            </List>
          </Box>
          <Box>
            <FooterHeadline>GET INVOLVED</FooterHeadline>
            <List>
              <FooterListItem>
                <Hyperlink to="#">Contribution Bible</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">Add New Movie</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">Add New TV Show</Hyperlink>
              </FooterListItem>
            </List>
          </Box>
          <Box>
            <FooterHeadline>COMMUNITY</FooterHeadline>
            <List>
              <FooterListItem>
                <Hyperlink to="#">Guidelines</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">Discussions</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">Leaderboard</Hyperlink>
              </FooterListItem>
            </List>
          </Box>
          <Box>
            <FooterHeadline>LEGAL</FooterHeadline>
            <List>
              <FooterListItem>
                <Hyperlink to="#">Terms of Use</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">API Terms of Use</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">Privacy Policy</Hyperlink>
              </FooterListItem>
              <FooterListItem>
                <Hyperlink to="#">DMCA Policy</Hyperlink>
              </FooterListItem>
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
