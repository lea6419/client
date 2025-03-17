import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#050505" }, // זהב
 // secondary: { main: "#7B1E1E" }, // אדום יין
    background: { default: "#121212", paper: "#1E1E1E" }, // שחור כהה
    text: { primary: "#B8A28F", secondary: "#B8A28F" }, // לבן-שמנת ואפור זהוב
  },
  typography: {
    fontFamily: "'Cormorant Garamond', serif", // גופן קלאסי
    h1: { fontSize: "3rem", fontWeight: 700, color: "#FFD700" },
    h2: { fontSize: "2rem", fontWeight: 600, color: "#F5F5F5" },
    body1: { fontSize: "1.1rem", color: "#B8A28F" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#050505", // צבע הרקע של הכפתור (זהב)
          color: "#FFD700", // צבע הטקסט (זהב)
          padding: "10px 20px", // רווחים בכפתור
          borderRadius: "8px", // קצוות מעוגלים
          "&:hover": {
            backgroundColor: "#1E1E1E", // צבע רקע בהעברה (אדום יין)
          },
        },
      },
    },
  },
});

export default theme;
