import React, { useState } from "react";
import { apiService } from "../app/apiServices";
import { Box, Card, Grid2, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Modal from "@mui/material/Modal";
import LoadingScreen from "../components/LoadingScreen";
import YouTube from "react-youtube";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
};

function getVideoDimensions() {
  const { innerWidth } = window;
  const width = innerWidth > 1200 ? 640 : innerWidth * 0.7;
  const height = (width / 16) * 9;
  return {
    width,
    height,
  };
}

function TrailerItem({ movie }) {
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [videoSize, setVideoSize] = useState(getVideoDimensions());

  const handleOpen = () => {
    setOpen(true);
    setVideoSize(getVideoDimensions());
    const getVideo = async () => {
      try {
        let queryUrl = `/movie/${movie.id}/videos`;
        const res = await apiService.get(queryUrl);
        const results = res.data.results;
        const trailers = results.filter(
          (result) => result.type === "Trailer" && result.site === "YouTube"
        );
        if (trailers) setVideoId(trailers[0].key);
      } catch (error) {
        console.log(error);
      }
    };
    getVideo();
  };
  const handleClose = () => {
    setOpen(false);
    setVideoId(null);
  };

  return (
    <Grid2
      key={movie.id}
      sx={{
        width: { xs: "100%", sm: "50%", md: "300px" },
        marginRight: "20px",
        maxWidth: "300px",
      }}
    >
      <Card elevation={0} sx={{ background: "transparent", borderRadius: "0" }}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "165px",
            cursor: "pointer",
            transitionDuration: "0.2s",
            "&:hover": { transform: "scale(1.1)" },
          }}
          onClick={handleOpen}
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
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {!videoId ? (
              <LoadingScreen />
            ) : (
              <>
                <YouTube
                  videoId={videoId}
                  opts={videoSize}
                  style={{ lineHeight: 0 }}
                />
              </>
            )}
          </Box>
        </Modal>
      )}
    </Grid2>
  );
}

export default TrailerItem;
