import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PaidIcon from "@mui/icons-material/Paid";
import UsersIcon from "@mui/icons-material/People";

import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

import { red } from '@mui/material/colors';

const CardComponent = (props) => {
    const {title, total, color, people, amount_collected} = props
  return (
    // <Card sx={{ maxWidth: 345 }} style={{backgroundColor: color, color: "white"}}>
    <Card sx={{ maxWidth: 345 }}>
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: people ? "blue" : red[500] }} aria-label="loans">
            { people ? <UsersIcon /> : <PaidIcon /> }
          </Avatar>
        }
        title={title}
        subheader= { amount_collected ? "June 31, 2022" : ""}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {people ? total : `GMD ${total}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;