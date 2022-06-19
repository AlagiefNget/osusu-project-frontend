import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DataTable from '../DataTable/DataTable';
import PreviewIcon from '@mui/icons-material/Preview';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from 'react-router-dom';
import MemberService from '../../services/MemberService';
// import {members } from '../../services/Mer';

const Members = () => {
  const [membersData, setMembersData] = useState([]);

  const [adminsData, setAdminsData] = useState([]);

  useEffect(() =>{
    MemberService.loadAllMembers(updateMembersList);
    MemberService.loadAllMembersAdmins(updateAdminsList);
  }, []);

  const updateMembersList = (data) => {
    setMembersData(data);
  }

  const updateAdminsList = (data) => {
    setAdminsData(data);
  }

  const navigate = useNavigate();

  const columns = [
    { title: "Name", field: "name" },
    { title: "Address", field: "address" },
    { title: "Phone Number", field: "phone"},
    { title: "Type", field: "isAdmin", render: rowData => rowData.isAdmin ? "Admin" : "Member"},
    { title: "Awarded", field: "awarded", render: rowData => rowData.awarded ? "Yes" : "No"}
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
      onClick: (event, rowData) => alert("Do you want to remove " + rowData.name)
    }
  ];

  const viewDetails = (rowData) => {
    console.log({ rowData})
    navigate(`/members/${rowData.id}`);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginBottom: 30}}>
        <Grid item xs={8}>
          <DataTable columns={columns} data={membersData} title="Members List" actions={actions} paging search />
        </Grid>
        <Grid item xs={4}>
          <DataTable columns={adminColumns} data={adminsData} title="Pay To" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Members