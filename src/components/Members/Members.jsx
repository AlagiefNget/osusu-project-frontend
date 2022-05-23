import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DataTable from '../DataTable/DataTable';
import PreviewIcon from '@mui/icons-material/Preview';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from 'react-router-dom';

const Members = () => {
  const [membersData, setMembersData] = useState(
    [
      { name: "Mam Mass Sey", address: "Wellingara", phone: "2991033", awarded: "Not yet" },
      { name: "Landing O Jarju", address: "Jola Kunda", phone: "9023483", awarded: "Awarded" },
      { name: "Salimina Sillah", address: "Sukuta", phone: "8399203", awarded: "Awarded" },
      { name: "Ousman Ceesay", address: "Bundung", phone: "3299429", awarded: "Not yet" },
      { name: "Essa Jallow", address: "USA", phone: "92842929", awarded: "Awarded" },
    ]
  );

  const [adminsData, setAdminsData] = useState(
    [
      { name: "Landing O Jarju", address: "Jola Kunda", phone: "9023483" },
      { name: "Salimina Sillah", address: "Sukuta", phone: "8399203" }
    ]
  );

  const navigate = useNavigate();

  const columns = [
    { title: "Name", field: "name" },
    { title: "Address", field: "address" },
    { title: "Phone Number", field: "phone"},
    { title: "Awarded", field: "awarded"}
  ];

  const adminColumns = [
    { title: "Name", field: "name" },
    { title: "Phone Number", field: "phone"},
  ];

  const actions = [
    (rowData) => ({
      icon: PreviewIcon,
      tooltip: "View Member Details",
      onClick: (event, rowData) => viewDetails(rowData),
      disabled: rowData.birthYear < 2000,
    }),
    {
      icon: RemoveCircleOutlineIcon,
      tooltip: "Remove Member",
      onClick: (event, rowData) => alert("You saved " + rowData.name)
    }
  ];

  const viewDetails = (rowData) => {
    navigate(`/members/${rowData.name}`);
    // <Navigate to="/member-details" replace={true} />
    console.log({ rowData })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginBottom: 30}}>
        <Grid item xs={7}>
          <DataTable columns={columns} data={membersData} title="Members List" actions={actions} paging search />
        </Grid>
        <Grid item xs={5}>
          <DataTable columns={adminColumns} data={adminsData} title="Admin List" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Members