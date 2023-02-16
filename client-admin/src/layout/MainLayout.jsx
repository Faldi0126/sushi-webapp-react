import Navbar from '../views/Navbar';
import { Outlet } from 'react-router-dom';

const mainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default mainLayout;
