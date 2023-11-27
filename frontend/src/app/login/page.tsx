import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LoginForm from './ui/LoginForm';
import styles from './page.module.css'

export default function LoginPage() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginHeader}>
                <Typography variant='h6' align='center'>Login</Typography>
            </div>
            <Paper square className={styles.loginBody}>
                <LoginForm />
            </Paper>
        </div>
    )
}
