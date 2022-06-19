import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';
  
  const user = {
    avatar: '/public/images/profile_picture.jpg',
    city: 'Sukuta',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Salimina Sillah',
    timezone: 'GTM-7'
  };
  
const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {props.memberData && props.memberData.name}
        </Typography>
        {/* <Typography
          color="textSecondary"
          variant="body2"
        >
          {`${user.city}`}
        </Typography> */}
        {/* <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.timezone}
        </Typography> */}
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
);

export default AccountProfile;