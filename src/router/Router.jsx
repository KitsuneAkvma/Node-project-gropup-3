import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RestrictedRoutes from './RestrictedRoutes';
import PrivateRoutes from './PrivateRoutes';
import NotFound from '../pages/NotFound/NotFound';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>

        <Route element={<RestrictedRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
// Restricted and private routes don't work correctly. There is problem with getting state "isAuth". Change variable isLoggedIn in useAuth manually to test.

export default Router;