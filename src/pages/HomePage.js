import * as React from "react";
import Box from "@mui/material/Box";
import { apiService } from "../app/apiServices";

function HomePage() {
  React.useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await apiService.get("/movie/changes");
        console.log(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <Box>HomePage</Box>
    </>
  );
}

export default HomePage;
