import React from "react";
import { useParams } from "react-router-dom";
import { apiService } from "../../app/apiServices";
import { Box, Chip, Stack, Typography } from "@mui/material";
import ItemDetail from "../../components/ItemDetail";

function DetailPage({ type }) {
  let { itemId } = useParams();
  // Handle item detail
  const [itemDetail, setItemDetail] = React.useState("");
  const [itemDetailLoading, setItemDetailLoading] = React.useState(false);
  const [itemDetailError, setItemDetailError] = React.useState("");

  React.useEffect(() => {
    const getDetail = async () => {
      setItemDetailLoading(true);
      try {
        let queryUrl = "";
        type === "movie"
          ? (queryUrl = `/movie/${itemId}`)
          : (queryUrl = `/tv/${itemId}`);
        const res = await apiService.get(queryUrl);
        const results = res.data;
        console.log(results);
        setItemDetail(results);
        setItemDetailError("");
      } catch (error) {
        console.log(error);
        setItemDetailError(error.message);
      }
      setItemDetailLoading(false);
    };
    getDetail();
  }, [type, itemId]);

  return (
    <>
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
          <Typography variant="h6">
            DetailPage: {type} - {itemId} -{" "}
            {itemDetail.title || itemDetail.name}
          </Typography>

          <ItemDetail itemDetail={itemDetail} />
          <Box>
            <Typography>Recommendations</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DetailPage;
