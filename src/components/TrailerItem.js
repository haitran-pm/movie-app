import React from "react";
import { Box, Card, Grid2, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

function TrailerItem({ movie }) {
  return (
    <Grid2
      key={movie.id}
      sx={{
        width: { xs: "50%", sm: "25%", md: "300px" },
        marginRight: "20px",
      }}
    >
      <Card elevation={0} sx={{ background: "transparent", borderRadius: "0" }}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "165px",
            transitionDuration: "0.2s",
            "&:hover": { transform: "scale(1.1)" },
          }}
        >
          <Box
            component="img"
            src={`https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/${movie.poster_path}`}
            alt="movie.title"
            sx={{
              width: "300px",
            }}
          />
          <PlayArrowRoundedIcon
            sx={{
              position: "absolute",
              zIndex: 50,
              color: "#fff",
              fontSize: "70px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </Box>
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            fontSize: "19px",
            fontWeight: 600,
            lineHeight: "24px",
            marginTop: "10px",
          }}
        >
          {movie.title ?? movie.name}
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "16px",
            lineHeight: "16px",
            textAlign: "center",
          }}
        >
          {movie.release_date ?? movie.first_air_date}
        </Typography>
      </Card>
    </Grid2>
  );
}

export default TrailerItem;
