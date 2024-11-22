import React from "react";
import MovieItem from "./MovieItem";
import { apiService } from "../app/apiServices";
import {
  StyledHeadline,
  StyledScrollBox,
  StyledScrollBoxInner,
} from "../pages/HomePage/styled-component";
import { Container, Typography } from "@mui/material";

function RecommendationList({ type, genres }) {
  const genreList = genres.map((genre) => `${genre.id}`);

  const [resultList, setResultList] = React.useState([]);
  React.useEffect(() => {
    const getResults = async () => {
      try {
        let queryUrl = "";
        type === "movie"
          ? (queryUrl = `/discover/movie?with_genres=${genreList}`)
          : (queryUrl = `/discover/tv?with_genres=${genreList}`);
        const res = await apiService.get(queryUrl);
        const results = res.data.results;
        setResultList(results);
      } catch (error) {
        console.log(error);
      }
    };
    getResults();
  }, [genreList, type]);

  return (
    <Container
      disableGutters
      sx={{ maxWidth: "1300px", paddingX: "0" }}
      maxWidth={false}
    >
      <StyledHeadline>
        <Typography variant="h2" sx={{ fontSize: "24px", fontWeight: 600 }}>
          Recommendations
        </Typography>
      </StyledHeadline>
      <StyledScrollBox>
        <StyledScrollBoxInner container>
          {resultList.map((movie, index) => {
            return (
              <MovieItem
                key={movie.id}
                movie={movie}
                type={type === "show" ? "shows" : "movies"}
              />
            );
          })}
        </StyledScrollBoxInner>
      </StyledScrollBox>
    </Container>
  );
}

export default RecommendationList;
