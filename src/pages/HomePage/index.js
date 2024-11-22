import * as React from "react";
import { apiService } from "../../app/apiServices";
import { Grid2, Skeleton, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  HomeBanner,
  StyledInputBase,
  StyledSearchButton,
  StyledToggleButtonGroup,
  StyledToggleButton,
  StyledHeadline,
  StyledScrollBox,
  StyledSectionTrending,
  StyledScrollBoxInner,
  StyledSectionPopular,
  StyledSectionTrailer,
} from "./styled-component";
import MovieItem from "../../components/MovieItem";
import TrailerItem from "../../components/TrailerItem";
import LeaderboardItem from "../../components/LeaderboardItem";

function HomePage() {
  // Handle home banner block
  const [homeBanner, setHomeBanner] = React.useState("");
  const [bannerLoading, setBannerLoading] = React.useState(false);
  React.useEffect(() => {
    const getBanner = async () => {
      setBannerLoading(true);
      try {
        let queryUrl = "/trending/movie/week";
        const res = await apiService.get(queryUrl);
        const results = res.data.results;
        setHomeBanner(
          results[Math.floor(Math.random() * results.length)].backdrop_path
        );
      } catch (error) {
        console.log(error);
      }
      setBannerLoading(false);
    };
    getBanner();
  }, []);

  // Handle trending block
  const [trendingTab, setTrendingTab] = React.useState("day");
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  React.useEffect(() => {
    const getMovies = async () => {
      try {
        let queryUrl = "";
        trendingTab === "day"
          ? (queryUrl = "/trending/all/day")
          : (queryUrl = "/trending/all/week");
        const res = await apiService.get(queryUrl);
        setTrendingMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [trendingTab]);
  const handleTrendingTab = (event, newTrendingTab) => {
    if (newTrendingTab !== null) {
      setTrendingTab(newTrendingTab);
    }
  };

  // Handle latest trailers block
  const [trailerBackdrop, setTrailerBackdrop] = React.useState("");
  const [latestTab, setLatestTab] = React.useState("now");
  const [latestMovies, setLatestMovies] = React.useState([]);
  React.useEffect(() => {
    const getMovies = async () => {
      try {
        let queryUrl = "";
        latestTab === "now"
          ? (queryUrl = "/movie/now_playing")
          : (queryUrl = "/movie/upcoming");
        const res = await apiService.get(queryUrl);
        const results = res.data.results;
        setLatestMovies(results);
        setTrailerBackdrop(
          results[Math.floor(Math.random() * results.length)].backdrop_path
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [latestTab]);
  const handleLatestTab = (event, newLatestTab) => {
    setLatestTab(newLatestTab);
  };

  // Handle what's popular block
  const [popularShows, setPopularShows] = React.useState([]);
  React.useEffect(() => {
    const getShows = async () => {
      try {
        let queryUrl = "/tv/top_rated";
        const res = await apiService.get(queryUrl);
        setPopularShows(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getShows();
  }, []);

  // Handle leaderboard
  const defaultLeaderboard = [
    {
      avatar: 1,
      name: "Samara",
      all_edits: "3,910,087",
      week_edits: "34,780",
      all_bar_size: "70%",
      week_bar_size: "80%",
    },
    {
      avatar: 2,
      name: "maxtherabbit",
      all_edits: "61,905",
      week_edits: "13,636",
      all_bar_size: "50%",
      week_bar_size: "40%",
    },
    {
      avatar: 3,
      name: "Shei",
      all_edits: "1,356,579",
      week_edits: "13,599",
      all_bar_size: "50%",
      week_bar_size: "38%",
    },
    {
      avatar: 4,
      name: "whistler2023",
      all_edits: "51,047",
      week_edits: "13,434",
      all_bar_size: "50%",
      week_bar_size: "36%",
    },
    {
      avatar: 5,
      name: "HaeRang",
      all_edits: "123,521",
      week_edits: "11,159",
      all_bar_size: "50%",
      week_bar_size: "33%",
    },
    {
      avatar: 6,
      name: "dietong",
      all_edits: "80,996",
      week_edits: "7,897",
      all_bar_size: "50%",
      week_bar_size: "20%",
    },
    {
      avatar: 7,
      name: "raze464",
      all_edits: "931,582",
      week_edits: "6,544",
      all_bar_size: "50%",
      week_bar_size: "18%",
    },
    {
      avatar: 8,
      name: "marack99",
      all_edits: "184,265",
      week_edits: "5,874",
      all_bar_size: "50%",
      week_bar_size: "15%",
    },
    {
      avatar: 9,
      name: "Magicus",
      all_edits: "340,043",
      week_edits: "5,399",
      all_bar_size: "50%",
      week_bar_size: "14%",
    },
    {
      avatar: 10,
      name: "chkchkboom",
      all_edits: "78,091",
      week_edits: "4,339",
      all_bar_size: "50%",
      week_bar_size: "13%",
    },
  ];

  return (
    <>
      <Container
        disableGutters
        sx={{ maxWidth: "1300px", paddingX: "0" }}
        maxWidth={false}
      >
        {bannerLoading ? (
          <Skeleton animation="wave" variant="rectangular" />
        ) : (
          <HomeBanner
            square={true}
            elevation={0}
            sx={{
              backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${homeBanner}")`,
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Welcome.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              Millions of movies, TV shows and people to discover. Explore now.
            </Typography>
            <Box sx={{ position: "relative", mt: "30px" }}>
              <form method="get" action="/search">
                <StyledInputBase
                  placeholder="Search for a movie, tv show, person......"
                  inputProps={{ "aria-label": "search" }}
                  name="keyword"
                />
                <StyledSearchButton type="submit">Search</StyledSearchButton>
              </form>
            </Box>
          </HomeBanner>
        )}
      </Container>
      <StyledSectionTrending disableGutters maxWidth={false}>
        <StyledHeadline
          sx={{ flexDirection: { xs: "column", sm: "row", md: "row" } }}
        >
          <Typography variant="h2" sx={{ fontSize: "24px", fontWeight: 600 }}>
            Trending
          </Typography>
          <StyledToggleButtonGroup
            value={trendingTab}
            exclusive
            onChange={handleTrendingTab}
          >
            <StyledToggleButton disableRipple value="day">
              Today
            </StyledToggleButton>
            <StyledToggleButton disableRipple value="week">
              This Week
            </StyledToggleButton>
          </StyledToggleButtonGroup>
        </StyledHeadline>
        <StyledScrollBox>
          <StyledScrollBoxInner container>
            {trendingMovies.map((movie, index) => {
              return (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  type={movie.media_type === "movie" ? "movies" : "shows"}
                />
              );
            })}
          </StyledScrollBoxInner>
        </StyledScrollBox>
      </StyledSectionTrending>
      <StyledSectionTrailer
        disableGutters
        maxWidth={false}
        background={`https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,060915,103b36)${trailerBackdrop}`}
      >
        <StyledHeadline
          darktheme="true"
          sx={{ flexDirection: { xs: "column", sm: "row", md: "row" } }}
        >
          <Typography variant="h2" sx={{ fontSize: "24px", fontWeight: 600 }}>
            Latest Trailers
          </Typography>
          <StyledToggleButtonGroup
            value={latestTab}
            exclusive
            onChange={handleLatestTab}
            darktheme="true"
          >
            <StyledToggleButton darktheme="true" disableRipple value="now">
              Popular
            </StyledToggleButton>
            <StyledToggleButton darktheme="true" disableRipple value="upcoming">
              In Theaters
            </StyledToggleButton>
          </StyledToggleButtonGroup>
        </StyledHeadline>
        <StyledScrollBox>
          <StyledScrollBoxInner container>
            {latestMovies.map((trailer, index) => {
              return <TrailerItem key={trailer.id} movie={trailer} />;
            })}
          </StyledScrollBoxInner>
        </StyledScrollBox>
      </StyledSectionTrailer>
      <StyledSectionPopular disableGutters maxWidth={false}>
        <StyledHeadline>
          <Typography variant="h2" sx={{ fontSize: "24px", fontWeight: 600 }}>
            What's Popular
          </Typography>
        </StyledHeadline>
        <StyledScrollBox>
          <StyledScrollBoxInner container>
            {popularShows.map((show, index) => {
              return <MovieItem key={show.id} movie={show} type="shows" />;
            })}
          </StyledScrollBoxInner>
        </StyledScrollBox>
      </StyledSectionPopular>
      <Container
        disableGutters
        sx={{ maxWidth: "1300px", paddingX: "0" }}
        maxWidth={false}
      >
        <StyledHeadline>
          <Typography variant="h2" sx={{ fontSize: "24px", fontWeight: 600 }}>
            Leaderboard
          </Typography>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="span"
                sx={{
                  display: "block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  background: "rgb(30, 213, 169)",
                  backgroundImage:
                    "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)",
                }}
              />
              <Typography sx={{ fontSize: "14px" }}>All Time Edits</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="span"
                sx={{
                  display: "block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  background: "rgb(217, 59, 99)",
                  backgroundImage:
                    "linear-gradient(to right, rgb(253, 193, 112) 0%, rgb(217, 59, 99) 100%)",
                }}
              />
              <Typography sx={{ fontSize: "14px" }}>Edits This Week</Typography>
            </Box>
          </Box>
        </StyledHeadline>
        <Box
          sx={{
            maxWidth: "1300px",
            paddingBottom: "50px",
            paddingX: "40px",
          }}
        >
          <Box>
            <Grid2 container spacing={0}>
              {defaultLeaderboard.map((leader, index) => {
                return <LeaderboardItem key={leader.name} leader={leader} />;
              })}
            </Grid2>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
