import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import CircularWithValueLabel from "../components/CircularProgressWithLabel";
import { Link } from "react-router-dom";
import EmptyImg from "../assets/empty.png";

function ItemDetail({ itemDetail, type }) {
  const itemImg = itemDetail.poster_path
    ? `https://media.themoviedb.org/t/p/w440_and_h660_face${itemDetail.poster_path}`
    : itemDetail.backdrop_path
    ? `https://media.themoviedb.org/t/p/w440_and_h660_face${itemDetail.backdrop_path}`
    : EmptyImg;

  const itemBackdrop = itemDetail.poster_path
    ? `https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(blur)${itemDetail.poster_path}`
    : itemDetail.backdrop_path
    ? `https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(blur)${itemDetail.backdrop_path}`
    : EmptyImg;

  return (
    <>
      <Box
        className="my-detail"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "rgba(3,37,65,0.5)",
          color: "#fff",
        }}
      >
        <Box
          className="overlay"
          component="img"
          src={itemBackdrop}
          alt={itemDetail.title || itemDetail.name}
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: 0.5,
          }}
        />
        <Box
          className="inner"
          sx={{
            width: "100%",
            paddingTop: "30px",
            paddingBottom: "50px",
            paddingLeft: "30px",
            paddingRight: "30px",
            display: "flex",
            gap: "30px",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <Box
            className="colum-left"
            sx={{
              width: { xs: "100%", sm: "30%", md: "30%" },
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={itemImg}
              alt={itemDetail.title || itemDetail.name}
              sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.1);",
              }}
            />
            <CircularWithValueLabel
              value={(itemDetail.vote_average * 10).toFixed()}
              top="10px"
            />
          </Box>
          <Box
            className="column-right"
            sx={{ width: { xs: "100%", sm: "70%", md: "70%" } }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "40px", fontWeight: 600, color: "#fff" }}
            >
              {itemDetail.title || itemDetail.name}
            </Typography>
            <Typography>
              Realease date:{" "}
              {itemDetail.release_date || itemDetail.first_air_date}
            </Typography>
            {type === "movie" ? (
              <Typography>
                Revenue: {itemDetail.revenue} | Budget: {itemDetail.budget}
              </Typography>
            ) : (
              <Typography>
                Episodes: {itemDetail.number_of_episodes} | Seasons:{" "}
                {itemDetail.number_of_seasons}
              </Typography>
            )}
            Genres:
            <Stack
              direction="row"
              spacing={0}
              sx={{ flexWrap: "wrap", gap: "6px" }}
            >
              {itemDetail.genres.map((item) => {
                return (
                  <Chip
                    key={item.id}
                    label={item.name}
                    component={Link}
                    to={`/${type === "movie" ? "movies" : "shows"}/?genreId=${
                      item.id
                    }`}
                    target="_blank"
                    sx={{ cursor: "pointer" }}
                  />
                );
              })}
            </Stack>
            Production companies:
            <Stack
              direction="row"
              spacing={0}
              sx={{ flexWrap: "wrap", gap: "6px" }}
            >
              {itemDetail.production_companies.map((item) => {
                return <Chip key={item.id} label={item.name} />;
              })}
            </Stack>
            Origin country:
            <Stack
              direction="row"
              spacing={0}
              sx={{ flexWrap: "wrap", gap: "6px" }}
            >
              <Chip label={itemDetail.origin_country[0]} />
            </Stack>
            <Typography>Overview: {itemDetail.overview}</Typography>
            {itemDetail.tagline && (
              <Typography>Tagline: {itemDetail.tagline}</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ItemDetail;
