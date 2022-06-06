import { useState } from 'react';
import { Box, Container, Typography, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';

const Settings = () => {
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Settings
          </Typography>
          {/* <SettingsNotifications /> */}
          <Box sx={{ pt: 3 }}>
            {/* <form {...props}> */}
            <form>
              <Card>
                <CardHeader subheader="Update password" title="Password" />
                <Divider />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Password"
                    margin="normal"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Confirm password"
                    margin="normal"
                    name="confirm"
                    onChange={handleChange}
                    type="password"
                    value={values.confirm}
                    variant="outlined"
                  />
                </CardContent>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                  }}
                >
                  <Button color="primary" variant="contained">
                    Update
                  </Button>
                </Box>
              </Card>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Settings;
