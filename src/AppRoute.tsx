
import { Routes, Route } from 'react-router-dom';
import About from './component/about'; 
import Home from './component/home';

const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>

    );
};

export default AppRoutes;
