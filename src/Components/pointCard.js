import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const PointCard = ({ number, handleClick, index }) => {
  return (
    <Grid item lg={3} md={3} sm={4} xs={6} key={index}>
      <Paper
        onClick={() => handleClick(number)}
        sx={{
          padding: "16px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f5f5f5", // Üzerine gelince arka plan rengi
            boxShadow: "0 0 10px rgba(0, 1, 1, 0.3)", // Gölge efekti
          },
        }}
        style={{
          padding: "30px",
          height: "200px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            height: "100%",
            border: "1px solid gray",
            borderRadius: 8,
            position: "relative",
          }}
        >
          <Typography
            variant="body1"
            style={{ position: "absolute", left: -10, top: -10 }}
          >
            {number}
          </Typography>
          <Typography variant="h2">{number}</Typography>
          <Typography
            variant="body1"
            style={{ position: "absolute", right: -10, bottom: -10 }}
          >
            {number}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};
