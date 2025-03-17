import React, { useState, useContext } from "react";
import { Modal, TextField, Button, Box, Typography, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import { UserContext } from "../../provider&context/UserProvider";

const LoginModal = () => {
    const { state, dispatch } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const handleLogin = async () => {
        // setLoading(true);
        try {
            const res = await axios.post(
                'https://localhost:7234/api/User/login',
                {
                    email: email,
                    password: password,
                },
                { // הוספת אובייקט config
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(res.data.user);
            
        // שמירת הטוקן ב-localStorage
        sessionStorage.setItem('token', res.data.token);
        console.log(res.data.token
        );
        
            dispatch({ type: "LOGIN", payload: res.data.user });
            setError('');
            setIsOpen(false);
            setEmail('');
            setPassword('');
            // setLoading(false);
            setSnackbarOpen(true);
            setError("התחברת בהצלחה!");
        } catch (e: any) {
            dispatch({ type: "LOGOUT" });
            if (e.response) { // בדיקה אם e.response קיים
                if (e.response.status === 404) setError("משתמש לא קיים במערכת.");
                else if (e.response.status === 401) setError("שם המשתמש או הסיסמא אינם תואמים.");
                else if (e.response.status === 500) setError("שגיאה בשרת.");
                else if (e.response.status === 400) setError("שגיאה בפרמטרים.");
                else if (e.response.status === 403) setError("אין לך הרשאות.");
                else setError("שגיאה בהתחברות. נסה שוב מאוחר יותר.");
            } else {
                setError("שגיאת רשת. נסה שוב מאוחר יותר."); // טיפול בשגיאת רשת
            }

            setSnackbarOpen(true);
            console.log(e);
            setEmail('');
            setPassword('');
            // setLoading(false);
        }
    };

    const handleSnackbarClose = (_event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    if (state.user) return null;

    return (
        <>
        <Button
  variant="contained"
  onClick={() => setIsOpen(true)}>
  כניסת משתמש
</Button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Box sx={{ ...modalStyle }}>
                    <Typography variant="h6">התחברות</Typography>
                    <TextField
                        label="מייל"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="סיסמא"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" onClick={handleLogin}>
                        התחבר
                    </Button>
                </Box>
            </Modal>

            {/* Snackbar for error messages */}
            <Snackbar open={snackbarOpen} autoHideDuration={6000}  >
                <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </>
    );
};
const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};
export default LoginModal;
