import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MemberService from "../../services/MemberService";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const MemberDetails = () => {
  const [memberData, setMemberData] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    MemberService.loadMemberDetails(params.id, getMemberDetails);
  }, [params, params.id]);

  const goBack = () => {
    navigate("/members");
  };

  const getMemberDetails = (data) => {
    setMemberData(data);
  };

  const editMember = () => {
    alert("Member details will be edited");
  };

  const makeAdmin = () => {
    alert("Member will be made admin");
  };

  const removeAsAdmin = () => {
    alert("Member will be removed as admin");
  };

  return (
    <Grid container>
      <Grid container>
        <Grid item lg={12} md={12} xs={12} style={{ float: "right" }}>
          <Button variant="outlined" color="error" raised onClick={goBack}>
            Back
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Avatar />
                {/* <Img alt="complex" src="/public/images/profile_picture.jpg" /> */}
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {memberData.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {memberData.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Is Admin: {memberData.isAdmin ? "Yes" : "No"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone: {memberData.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {memberData.email}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="secondary"
                        raised
                        onClick={editMember}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="primary"
                        raised
                        onClick={memberData.isAdmin ? removeAsAdmin : makeAdmin}
                      >
                        {memberData.isAdmin ? "Remove Admin" : "Make Admin"}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Total Paid
                </Typography>
                <Typography variant="subtitle1" component="div">
                  GMD 0.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MemberDetails;
