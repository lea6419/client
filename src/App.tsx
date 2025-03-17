
// import  { useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { UserContext, UserProvider } from './provider&context/UserProvider';
// import UserControls from './component/user/UserControllers';
// import UsersManager from './component/user/userManagment';
// import FileUploader from './component/files/file';
// import DraftEditor from './component/files/DraftEditor';
import TypingEditor from './component/files/TypingEditor';

import FileUpload from './component/files/addfile';
export  default function App() {
  // const { state } = useContext(UserContext);
  return (
    <><FileUpload /><div className="App">
      <TypingEditor />
    </div></>
    // <FileUploader/>
  //     < UserProvider>
   
  //   <Router>
  //     <Routes>
  //       {/* <Route path="/" element={<UserControls />} /> */}
  //       {/* <Route path="/users" element={<UsersManager />} /> */}
  //       {/* <Route path="/users" element={state.user ? <UsersManager /> : <Navigate to="/" />} /> */}
      
  //       {/* הוסף נתיבים נוספים כאן */}
  //     </Routes>
  //   </Router>
  // </UserProvider>
  );
}