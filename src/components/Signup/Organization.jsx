import { People } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const theme = createTheme();

const Organization = ({ handleChange, paymentCycles, stateData }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <People />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter Your Association Details
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="groupName"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Group Name"
                  value={stateData.name}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="paymentAmount"
                  required
                  fullWidth
                  id="paymentAmount"
                  label="Payment Amount"
                  value={stateData.paymentAmount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  label="Payment Cycle"
                  value={stateData.paymentCycles}
                  id="paymentCycles"
                  name="paymentCycles"
                  onChange={handleChange}
                  helperText="Please select your payments cycle"
                  fullWidth
                >
                  {paymentCycles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="startDate"
                  required
                  fullWidth
                  id="startDate"
                  label="Start Date"
                  type="date"
                  value={stateData.startDate}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Organization;
