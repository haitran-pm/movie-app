import { Avatar, Box, Grid2, Typography } from "@mui/material";
import React from "react";

function LeaderboardItem({ leader }) {
  const avatarLink = `https://i.pravatar.cc/150?img=${leader.avatar}`;
  return (
    <Grid2
      size={{ xs: 12, md: 6 }}
      sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}
    >
      <Avatar
        alt="Leaderboard"
        src={avatarLink}
        sx={{ width: 56, height: 56 }}
      />
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontSize: "19px",
            lineHeight: "24px",
            fontWeight: 600,
          }}
        >
          {leader.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "6px",
          }}
        >
          <Box
            sx={{
              width: leader.all_bar_size,
              height: "8px",
              borderRadius: "10px",
              background: "rgb(30, 213, 169)",
              backgroundImage:
                "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)",
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "8px",
            }}
          >
            {leader.all_edits}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "6px",
          }}
        >
          <Box
            sx={{
              width: leader.week_bar_size,
              height: "8px",
              borderRadius: "10px",
              background: "rgb(217, 59, 99)",
              backgroundImage:
                "linear-gradient(to right, rgb(253, 193, 112) 0%, rgb(217, 59, 99) 100%)",
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "8px",
            }}
          >
            {leader.week_edits}
          </Typography>
        </Box>
      </Box>
    </Grid2>
  );
}

export default LeaderboardItem;
