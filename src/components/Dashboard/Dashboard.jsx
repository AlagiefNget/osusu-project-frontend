import React from "react";
import CardComponent from "../Card/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const Dashboard = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginBottom: 30}}>
          <Grid item xs={3}>
              <CardComponent title={"Total Members"} total={25} color={"red"} people={true} />
          </Grid>
          <Grid item xs={3}>
              <CardComponent title={"Arrears"} total={3500} color={"red"} />
          </Grid>
          <Grid item xs={3}>
              <CardComponent title={"Active Loans"} total={7000} color={"red"} />
          </Grid>
          <Grid item xs={3}>
              <CardComponent title={"Pending Loans"} total={4500} color={"blue"} />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={3}>
              <CardComponent title={"Total Members Awarded"} total={5} people/>
          </Grid>
          <Grid item xs={3}>
          <CardComponent title={"Total Members Rem."} total={20} people/>
          </Grid>
          <Grid item xs={3}>
              <CardComponent title={"Amount Collected"} total={7000} color={"red"} amount_collected={true} />
          </Grid>
          <Grid item xs={3}>
              <CardComponent title={"Fund"} total={4500} color={"blue"} amount_collected={true} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
