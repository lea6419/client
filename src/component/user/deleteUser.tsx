// import React, { SyntheticEvent, useState } from 'react';
// import { Button, Snackbar, Alert, SnackbarCloseReason } from '@mui/material';
// import ApiService from '../../services/ApiService'; // וודא שמיקום ApiService נכון

// interface DeleteUserProps {
//   userId: number;
//   onDelete: () => void;
// }

// const DeleteUser: React.FC<DeleteUserProps> = ({ userId, onDelete }) => {
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

//   const handleDelete = async () => {
//     try {
//       await ApiService.deleteUser(userId);
//       setSnackbarMessage('משתמש נמחק בהצלחה.');
//       setSnackbarSeverity('success');
//       setSnackbarOpen(true);
//       onDelete();
//     } catch (error: any) {
//       setSnackbarMessage(error.response?.data?.message || 'שגיאה במחיקת משתמש.');
//       setSnackbarSeverity('error');
//       setSnackbarOpen(true);
//     }
//   };

//   const handleSnackbarClose = (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setSnackbarOpen(false);
//   };

//   return (
//     <>
//       <Button variant="contained" color="error" onClick={handleDelete}>
//         מחק משתמש
//       </Button>
//       <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
//         <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

// export default DeleteUser;