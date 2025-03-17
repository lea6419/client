import React, { useContext, useState } from "react";
import { Modal, TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { UserContext } from "../../provider&context/UserProvider";
import { User } from "../../mpdels/models"
import { Snackbar, Alert } from "@mui/material";
const UserUpdateForm: React.FC = () => {
    const { state, dispatch } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const [userDetails, setUserDetails] = useState<Partial<User>>(state.user || {});
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
 
    const handleUpdate = async () => {
        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                setSnackbarMessage("אינך מחובר.");
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                return;
            }

            if (!state.user?.id) {
                setSnackbarMessage("שגיאה: משתמש לא נמצא.");
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                return;
            }

            const res = await axios.put(
                `https://localhost:7234/api/User/${state.user.id}`, // שימוש ב-userId ב-URL
                userDetails,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // הוספת טוקן
                    },
                }
            );

            console.log(res);
            console.log(userDetails);

            dispatch({ type: "UPDATE", payload: userDetails as User });
            setSnackbarMessage("פרטי משתמש עודכנו בהצלחה.");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);
        } catch (e: any) {
            console.error(e);
            setSnackbarMessage(e.response?.data?.message || "שגיאה בעדכון פרטי משתמש.");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        }
        setIsOpen(false);
    };

    const handleOpen = () => {
        setUserDetails(state.user || {});
        setIsOpen(true);
    };

    const handleSnackbarClose = (_event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    if (!state.user) return null;

    return (
        <>
            <Button variant="contained" onClick={handleOpen}>
                עדכון פרטי משתמש
            </Button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Box sx={{ ...modalStyle }}>
                    <Typography variant="h6">עדכון פרטים</Typography>
                    <TextField
                        label="שם "
                        value={userDetails.FullName || ''}
                        onChange={(e) => setUserDetails({ ...userDetails, FullName: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="אימייל"
                        value={userDetails.email || ''}
                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="תפקיד"
                        value={userDetails.role || ''}
                        onChange={(e) => setUserDetails({ ...userDetails, role: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                        <TextField
                        label="password "
                        value={userDetails.password || ''}
                        onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" onClick={handleUpdate}>
                        שמור
                    </Button>
                </Box>
            </Modal>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
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

export default UserUpdateForm;