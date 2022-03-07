import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../views/HomePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/destination" element={<div>Destination</div>} />
      <Route exact path="/crew" element={<div>Crew</div>} />
      <Route exact path="/technology" element={<div>Technology</div>} />
    </Routes>
  );
};
