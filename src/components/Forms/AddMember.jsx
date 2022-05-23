import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AddMember = (props) =>{
  
    const { closeAddMember, openAddMember } = props;
    const [memberData, setMemberData] = React.useState({
        fullName: '',
        address: '',
        phone: ''
    });

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMemberData({...memberData, [name]: value});
    };

    const submitMemberData = () => {
        alert(JSON.stringify(memberData));
        setMemberData({
            fullName: '',
            address: '',
            phone: ''
        });
    };

    return (
        <div>
        <Dialog open={openAddMember} onClose={closeAddMember}>
            <DialogTitle>Add Osusu Member</DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="fullName"
                name="fullName"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleOnChange}
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
                onChange={handleOnChange}
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
                onChange={handleOnChange}
            />
            </DialogContent>
            <DialogActions >
            <Button  variant="contained" color="error" onClick={closeAddMember} >Cancel</Button>
            <Button  variant="contained" onClick={submitMemberData}  >Save</Button>
            <div style={{flex: '1 0 0'}} />
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default AddMember;