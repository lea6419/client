import { Box, Button } from '@mui/material';
import Register from './Register';
import LoginModal from './LoginModal';
import UserAvatar from './UserAvatar';
import { Link } from 'react-router-dom';

const UserControls = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <UserAvatar />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 20, left: 100 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <LoginModal />
        </Box>
        <br />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Register />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button component={Link} to="/users" variant="contained">
            ניהול משתמשים
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default UserControls;