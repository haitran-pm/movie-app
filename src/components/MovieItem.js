import React from "react";
import { Box, Card, Grid2, Typography } from "@mui/material";
import CircularWithValueLabel from "./CircularProgressWithLabel";
import { Link, NavLink } from "react-router-dom";

function MovieItem({ movie, type }) {
  const movieScore = (movie.vote_average * 10).toFixed();
  return (
    <Grid2
      key={movie.id}
      sx={{
        width: { xs: "50%", sm: "25%", md: "150px" },
      }}
    >
      <Card
        sx={{
          boxShadow: "none",
          background: "none",
          position: "relative",
        }}
      >
        <Link to={`/${type}/${movie.id}`}>
          <Box
            component="img"
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${
              movie.poster_path || movie.backdrop_path
            }`}
            alt="movie.title"
            sx={{
              height: "225px",
              borderRadius: "8px",
              display: "block",
            }}
          />
        </Link>
        <Box
          sx={{
            paddingTop: "26px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Link
            to={`/${type}/${movie.id}`}
            style={{
              textDecoration: "none",
              color: "unset",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "16px",
                fontWeight: 700,
              }}
            >
              {movie.title ?? movie.name}
            </Typography>
          </Link>
          <Typography sx={{ fontSize: "16px", color: "rgba(0,0,0,0.6)" }}>
            {movie.release_date ?? movie.first_air_date}
          </Typography>
        </Box>
        <CircularWithValueLabel value={movieScore} />
      </Card>
    </Grid2>
  );
}

export default MovieItem;
