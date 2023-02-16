import { createBrowserRouter } from 'react-router-dom';
import MainTable from '../views/MainTable';
import AddAdminForm from '../views/AddAdminForm';
import MainLayout from '../layout/MainLayout';
import LoginPage from '../views/LoginPage';
import CategoriesTable from '../views/CategoriesTable';
import AddFood from '../views/AddFood';
import EditForm from '../views/EditForm';
import { redirect } from 'react-router-dom';
import AddCategory from '../views/AddCategory';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    loader: () => {
      const guarder = localStorage.getItem('access_token');
      if (!guarder) {
        return redirect('/login');
      }
      return null;
    },
    children: [
      {
        path: '/',
        element: <MainTable />,
      },
      {
        path: '/register',
        element: <AddAdminForm />,
      },
      {
        path: '/categories',
        element: <CategoriesTable />,
      },
      {
        path: '/add-food',
        element: <AddFood />,
      },
      {
        path: '/add-category',
        element: <AddCategory />,
      },
      {
        path: '/edit/:id',
        element: <EditForm />,
      },
      {
        path: '*',
        element: <div>Not Found</div>,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => {
      const guarder = localStorage.getItem('access_token');
      if (guarder) {
        return redirect('/');
      }
      return null;
    },
  },
]);

export default router;
