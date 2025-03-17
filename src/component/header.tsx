
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box'; // ייבוא Box
import { useContext } from 'react';
import { UserContext } from '../provider&context/UserProvider';
import { motion } from "framer-motion";


const Header = () => {
    const {state} = useContext(UserContext);
    return (
        <AppBar position="static" color="primary">
        <Toolbar>
<motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  color='secondary'
>
  ברוכים הבאים לאתר המתכונים!
</motion.h2>

                <Box  sx={{ display: 'flex', gap: 2 }}> {/* הוספת Box עם gap */}
                    <Button variant="contained"      sx={{
        backgroundColor: "#050505", // צבע הרקע של הכפתור
        color: "#FFD700", // צבע הטקסט
        padding: "10px 20px", // רווחים בכפתור
        borderRadius: "8px", // קצוות מעוגלים
        
            "&:hover": {
            backgroundColor: "#1E1E1E", // שינוי צבע רקע בהעברה
            color: "#FFD700", // שינוי צבע טקסט בהעברה
            // color: "#FFFFFF", // שינוי צבע טקסט בהעברה
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // הוספת צל
        },
    }} 
                         component={Link} to="/">Home</Button>
                    {state.user && ( // בדוק אם המשתמש מחובר
                        <Button variant="contained"      sx={{
                            backgroundColor: "#050505", // צבע הרקע של הכפתור
                            color: "#FFD700", // צבע הטקסט
                            padding: "10px 20px", // רווחים בכפתור
                            borderRadius: "8px", // קצוות מעוגלים
                            
                                "&:hover": {
                                backgroundColor: "#1E1E1E", // שינוי צבע רקע בהעברה
                                color: "#FFD700", // שינוי צבע טקסט בהעברה
                                // color: "#FFFFFF", // שינוי צבע טקסט בהעברה
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // הוספת צל
                            },
                        }} 
    component={Link} 
    to="/addRecipe"
>
    add recipes
</Button>
                    )}
                   <Button variant="contained"      sx={{
        backgroundColor: "#050505", // צבע הרקע של הכפתור
        color: "#FFD700", // צבע הטקסט
        padding: "10px 20px", // רווחים בכפתור
        borderRadius: "8px", // קצוות מעוגלים
        
            "&:hover": {
            backgroundColor: "#1E1E1E", // שינוי צבע רקע בהעברה
            color: "#FFD700", // שינוי צבע טקסט בהעברה
            // color: "#FFFFFF", // שינוי צבע טקסט בהעברה
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // הוספת צל
        },
    }}  component={Link} to="/recipes">recipes</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;


