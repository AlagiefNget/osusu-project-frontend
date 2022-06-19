import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import AccountProfile from './AccountProfile';
import AccountProfileDetails from './AccountProfileDetails';
import MemberService from "../../services/MemberService";

const Account = () => {
  const [memberData, setMemberData] = useState({
    name: "",
    address: "",
    phone: "",
    email: ""
  });
  
  useEffect(() => {
    console.log(localStorage.getItem("memberId"))
    MemberService.loadMemberDetails(localStorage.getItem("memberId"), getMemberDetails);
  },[]);

  const getMemberDetails = (data) => {
    setMemberData({...data});
  };

  const handleChange = (event) => {
    setMemberData({
      ...memberData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile memberData={memberData} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails memberData={memberData} handleChangeInfo={handleChange} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Account;