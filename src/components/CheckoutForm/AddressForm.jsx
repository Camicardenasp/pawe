import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {useState} from 'react'

export default function AddressForm() {
    
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [address1, setAddress1]=useState("");

    const handleSubmit=() => {
        dispatch({
            type: "updateInfo",
            firstName: firstName,
            lastName: lastName,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
            country: country,
        });
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Dirección de Entrega
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Nombre"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Apellido"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Dirección"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}