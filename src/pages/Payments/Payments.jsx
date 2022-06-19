import React, { useState } from 'react';
import CardComponent from  "../../components/Card/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import PaymentsTable from "../../components/DataTable/PaymentsTable";
import PaymentsChart from "../../components/Charts/PaymentsChart";


const Payments = () => {
  const [membersData, setMembersData] = useState(
    [
      { name: "Mam Mass Sey", amount: "500"},
      { name: "Landing O Jarju", amount: "500"},
      { name: "Salimina Sillah", amount: "500"},
      { name: "Ousman Ceesay", amount: "500"},
      { name: "Essa Jallow", amount: "500"},
    ]
  );

  const columns = [
    { title: "Name", field: "name" },
    { title: "Amount", field: "amount" },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginBottom: 30}}>
          <Grid item xs={3}>
              <CardComponent title={"Collected Amount"} total={3500} color={"red"} addSubHeader />
          </Grid>
          <Grid item xs={3}>
              <CardComponent title={"Total Paid"} total={15} color={"red"} people={true} addSubHeader />
          </Grid>
          <Grid item xs={3}>
              <CardComponent title={"Balance"} total={7000} color={"red"} addSubHeader />
          </Grid>
          <Grid item xs={3}>
              <CardComponent title={"Non Paid"} total={5} color={"red"} people={true} addSubHeader />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={8}>
            <TextField
                  autoFocus
                  margin="dense"
                  id="payment_date"
                  name="payment_date"
                  label="Pay Date"
                  type="date"
                  variant="outlined"
                  size="small"
                  focused
                  // onChange={handleOnChange}
              />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={7}>
            <PaymentsTable data={membersData} columns={columns} />
          </Grid>
          <Grid item xs={5}>
            <PaymentsChart />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Payments;
