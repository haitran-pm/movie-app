import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: `${props.top}`,
        left: "10px",
        zIndex: 50,
        padding: "2px",
        borderRadius: "50px",
        background: "#081c22",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        variant="determinate"
        thickness={2.3}
        size={36}
        sx={[
          { color: "#21d07a" },
          props.value >= 1 && { color: "#666666" },
          props.value >= 40 && { color: "#d3d530" },
          props.value >= 70 && { color: "#21d07a" },
        ]}
        {...props}
      />
      <CircularProgress
        variant="determinate"
        thickness={2.3}
        size={40}
        sx={{
          color: "rgba(255,255,255,0.15)",
          position: "absolute",
        }}
        value={100}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "#FFF", fontSize: "14px", fontWeight: 900 }}
        >
          {props.value > 0 ? (
            <>
              {`${Math.round(props.value)}`}
              <Typography component="sup" sx={{ fontSize: "6px" }}>
                %
              </Typography>
            </>
          ) : (
            <>NR</>
          )}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel({ value, top, size }) {
  return (
    <CircularProgressWithLabel value={parseInt(value)} top={top} size={size} />
  );
}
