import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAnAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);





    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email };

        fetch("https://enigmatic-shelf-59046.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }

            })
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{ width: "50%" }} onBlur={handleOnBlur} label="Email" variant="standard" type="email" />
                <Button type="submit" variant='contained'>Make an Admin</Button>
            </form>
            {success && <Alert severity="success">Made an Admin successfully !</Alert>}
        </div>
    );
};

export default MakeAnAdmin;