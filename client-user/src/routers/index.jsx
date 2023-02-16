import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../views/FoodList';
import DetailPage from '../views/DetailPage';
import MainLayout from '../layout/MainLayout';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
