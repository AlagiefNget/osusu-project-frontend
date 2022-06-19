import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import * as React from "react";
import MemberService from "../../services/MemberService";

const AddMember = (props) => {
  const { closeAddMember, openAddMember } = props;
  const [memberData, setMemberData] = React.useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    isAdmin: 0,
  });

  const isAdminOptions = [
    {
      value: 0,
      label: "Member",
    },
    {
      value: 1,
      label: "Admin",
    },
  ];

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMemberData({ ...memberData, [name]: value });
  };

  const clearFields = () => {
    setMemberData({
        name: "",
        address: "",
        phone: "",
        email: "",
        isAdmin: 0,
      });
  };

  const submitMemberData = () => {
    alert(JSON.stringify(memberData));
    MemberService.addMember(memberData, clearFields);
  };

  return (
    <div>
      <Dialog open={openAddMember} onClose={closeAddMember}>
        <DialogTitle>Add Osusu Member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={memberData.name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            name="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={memberData.address}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            name="phone"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={memberData.phone}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={memberData.email}
          />
          <TextField
            select
            label="Member Type"
            value={memberData.isAdmin}
            id="isAdmin"
            name="isAdmin"
            onChange={handleChange}
            fullWidth
            variant="standard"
          >
            {isAdminOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={closeAddMember}>
            Cancel
          </Button>
          <Button variant="contained" onClick={submitMemberData}>
            Save
          </Button>
          <div style={{ flex: "1 0 0" }} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddMember;
