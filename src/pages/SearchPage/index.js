import {
  Box,
  Grid2,
  Pagination,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiService } from "../../app/apiServices";
import MovieItem from "../../components/MovieItem";
import NotFoundIcon from "../../assets/not-found.svg";

function SearchPage() {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  // Handle movie or show list
  const [resultList, setResultList] = useState([]);
  const [resultListLoading, setResultListLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  React.useEffect(() => {
    const getResults = async () => {
      setResultListLoading(true);
      try {
        let queryUrl = `/search/movie?query=${keyword}&page=${page}`;
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
  }, [keyword, page]);
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
          Results for keyword "{keyword}"
        </Typography>
        {resultListLoading ? (
          <>
            <Skeleton
              animation="wave"
              width="100%"
              height={200}
              variant="rounded"
              sx={{ marginBottom: "10px" }}
            />
            <Skeleton
              animation="wave"
              width="100%"
              height={200}
              variant="rounded"
              sx={{ marginBottom: "10px" }}
            />
            <Skeleton
              animation="wave"
              width="100%"
              height={200}
              variant="rounded"
              sx={{ marginBottom: "10px" }}
            />
          </>
        ) : resultList.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
              flexDirection: "column",
            }}
          >
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
                  <MovieItem key={item.id} movie={item} type="movies" />
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
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "40px",
              minHeight: "50vh",
            }}
          >
            <Box
              component="img"
              src={NotFoundIcon}
              alt="The Movie Database"
              sx={{ height: "300px" }}
            />
            <Typography>
              No results matched. Please try another keyword!
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchPage;
