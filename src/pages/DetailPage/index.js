import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "../../app/apiServices";
import { Box, Skeleton } from "@mui/material";
import ItemDetail from "../../components/ItemDetail";
import RecommendationList from "../../components/RecommendationList";

function DetailPage({ type }) {
  let { itemId } = useParams();
  // Handle item detail
  const [itemDetail, setItemDetail] = useState(null);
  // const [itemDetailLoading, setItemDetailLoading] = useState(true);

  useEffect(() => {
    // setItemDetailLoading(true);
    setItemDetail(null);
    const getDetail = async () => {
      try {
        const queryUrl =
          type === "movie" ? `/movie/${itemId}` : `/tv/${itemId}`;
        const res = await apiService.get(queryUrl);
        const results = res.data;
        setItemDetail(results);
        // if (results) {
        //   setItemDetailLoading(false);
        // }
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, [type, itemId]);

  //console.log("loading: ", itemDetailLoading);
  return (
    <>
      {!itemDetail ? (
        <Box sx={{ padding: "20px" }}>
          <Skeleton
            animation="wave"
            width="100%"
            height="700px"
            variant="rounded"
            sx={{ marginBottom: "10px" }}
          />
          <Skeleton
            animation="wave"
            width="100%"
            height="200px"
            variant="rounded"
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <ItemDetail itemDetail={itemDetail} type={type} />
            <RecommendationList genres={itemDetail.genres} type={type} />
          </Box>
        </Box>
      )}
    </>
  );
}

export default DetailPage;
