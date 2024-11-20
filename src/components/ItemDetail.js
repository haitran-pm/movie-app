import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import CircularWithValueLabel from "../components/CircularProgressWithLabel";

function ItemDetail({ itemDetail }) {
  const movieScore = (itemDetail.vote_average * 10).toFixed();
  return (
    <Box>
      <Box
        component="img"
        src={`https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(blur)${
          itemDetail.poster_path || itemDetail.backdrop_path
        }`}
      />
      <Box>
        <Box
          component="img"
          src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${
            itemDetail.poster_path || itemDetail.backdrop_path
          }`}
          alt={itemDetail.title || itemDetail.name}
        />
      </Box>
      <Box>
        <Typography variant="h1">
          {itemDetail.title || itemDetail.name}
        </Typography>
        <Typography>
          Realease date: {itemDetail.release_date || itemDetail.first_air_date}
        </Typography>
        {itemDetail.revenue ? (
          <Typography>
            Revenue: {itemDetail.revenue} | Budget: {itemDetail.budget}
          </Typography>
        ) : (
          <Typography>
            Episodes: {itemDetail.number_of_episodes} | Seasons:{" "}
            {itemDetail.number_of_seasons}
          </Typography>
        )}
        <Typography>{movieScore}%</Typography>
        <CircularWithValueLabel value={movieScore} />
        {/* Genres:
        <Stack direction="row" spacing={1}>
          {itemDetail.genres.map((item) => {
            return <Chip label={item.name} />;
          })}
        </Stack>
        Production companies:
        <Stack direction="row" spacing={1}>
          {itemDetail.production_companies.map((item) => {
            return <Chip label={item.name} />;
          })}
        </Stack>
        Origin country:
        <Stack direction="row" spacing={1}>
          <Chip label={itemDetail.origin_country[0]} />
        </Stack> */}
        <Typography>Overview: {itemDetail.overview}</Typography>
        {itemDetail.tagline && (
          <Typography>Tagline: {itemDetail.tagline}</Typography>
        )}
      </Box>
    </Box>
  );
}

export default ItemDetail;
