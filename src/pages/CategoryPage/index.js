import React, { useState } from "react";
import { apiService } from "../../app/apiServices";
import { Box, Grid2, Typography, Card, Button } from "@mui/material";
import MovieItem from "../../components/MovieItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";

function CategoryPage({ type }) {
  const [page, setPage] = React.useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let genreId = parseInt(searchParams.get("genreId"));

  // Handle genre list
  const [genreList, setGenreList] = React.useState([]);
  React.useEffect(() => {
    const getGenres = async () => {
      try {
        const queryUrl =
          type === "movies" ? "/genre/movie/list" : "/genre/tv/list";

        const res = await apiService.get(queryUrl);
        const results = res.data.genres;
        setGenreList(results);
        setPage(1);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, [type]);
  const handleChangeGenre = () => {
    setPage(1);
  };
  const handleResetFilter = () => {
    setPage(1);
    navigate(`/${type}`);
  };

  // Handle movie or show list
  const [resultList, setResultList] = useState([]);
  const [resultListLoading, setResultListLoading] = React.useState(false);
  const [totalPages, setTotalPages] = useState(1);
  React.useEffect(() => {
    const getResults = async () => {
      setResultListLoading(true);
      try {
        let queryUrl = "";
        type === "movies"
          ? (queryUrl = `/discover/movie?page=${page}${
              genreId ? `&with_genres=${genreId}` : ""
            }`)
          : (queryUrl = `/discover/tv?page=${page}${
              genreId ? `&with_genres=${genreId}` : ""
            }`);
        const res = await apiService.get(queryUrl);
        const results = res.data.results;
        setResultList(results);
        setTotalPages(res.data.total_pages);
      } catch (error) {
        console.log(error);
      }
      setResultListLoading(false);
    };
    getResults();
  }, [type, page, genreId]);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "1300px",
          paddingTop: "30px",
          paddingBottom: "50px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "24px", fontWeight: 600, marginBottom: "20px" }}
        >
          {type === "movies" ? "Popular Movies" : "Popular TV Shows"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: { xs: "100%", sm: "100%", md: "280px" } }}>
              <Card elevation={3}>
                <Typography
                  variant="h4"
                  sx={{ padding: "14px", fontSize: "20px", fontWeight: 600 }}
                >
                  Genres
                </Typography>
                <Divider />
                <Stack
                  direction="row"
                  sx={{
                    flexWrap: "wrap",
                    gap: "8px",
                    justifyContent: "flex-start",
                    paddingX: "14px",
                    paddingY: "16px",
                  }}
                >
                  {genreList.map((genre, index) => {
                    return (
                      <Chip
                        key={genre.id}
                        label={`${genre.name}`}
                        variant={genre.id === genreId ? "filled" : "outlined"}
                        sx={{ marginLeft: "0" }}
                        component={NavLink}
                        to={`?genreId=${genre.id}`}
                        onClick={handleChangeGenre}
                      />
                    );
                  })}
                </Stack>
                <Box sx={{ padding: "8px" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ width: "100%" }}
                    disabled={!!!genreId}
                    onClick={handleResetFilter}
                  >
                    Reset Filter
                  </Button>
                </Box>
              </Card>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid2
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              {resultList.map((item, index) => {
                return resultListLoading ? (
                  <Stack key={index} spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton
                      variant="rounded"
                      sx={{
                        width: { xs: "50%", sm: "25%", md: "150px" },
                      }}
                      height={200}
                    />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="circular" width={40} height={40} />
                  </Stack>
                ) : (
                  <MovieItem key={item.id} movie={item} type={type} />
                );
              })}
            </Grid2>
            <Stack spacing={2} sx={{ paddingTop: "50px" }}>
              <Pagination
                count={totalPages > 500 ? 500 : totalPages}
                page={page}
                shape="rounded"
                size="large"
                onChange={handleChangePage}
                showFirstButton
                showLastButton
                sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CategoryPage;
