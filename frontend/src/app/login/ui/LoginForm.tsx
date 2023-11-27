"use client"

import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

type formData = {
    username: string;
    password: string;
}

export default function LoginForm() {

    const [formData, setFormData] = React.useState<formData>({ username: "", password: "" })
    const [formDataError, setFormDataError] = React.useState<formData>({ username: "", password: "" })

    const validation = (): boolean => {

        let temp: formData = { username: "", password: "" }

        temp.username = formData.username ? "" : "Field is empty"
        temp.password = formData.password ? "" : "Field is empty"

        setFormDataError(temp)

        return Object.values(temp).every(value => !value)
    }

    const formDataOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    const formDataOnClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if (!validation()) return

        // Make the request
    }

    return (
        <form>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <TextField
                        name="username"
                        value={formData.username}
                        onChange={formDataOnChangeHandler}
                        fullWidth
                        autoFocus
                        placeholder='Username'
                        helperText={formDataError.username ? formDataError.username : ""}
                        error={formDataError.username ? true : false}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <AccountCircleIcon color='primary' />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        name="password"
                        value={formData.password}
                        onChange={formDataOnChangeHandler}
                        fullWidth
                        autoFocus
                        placeholder='Username'
                        helperText={formDataError.username ? formDataError.username : ""}
                        error={formDataError.username ? true : false}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <LockIcon color='primary' />
                                </InputAdornment>
                            ),
                        }}
                        type='password'
                    />
                </Grid>
                <Grid xs={12} sx={{ marginBottom: "5px" }}>
                    <Button variant='contained' onClick={formDataOnClickHandler}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
