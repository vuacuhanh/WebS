import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTERS } from './utils/routers';

// User Layouts & Pages
import { MasterLayout } from './pages/users/theme/MasterLayout/MasterLayout';
import { SimpleLayout } from './pages/users/theme/SimpleLauout/SimpleLayout';
import { HomePage } from './pages/users/HomePage/HomePage';
import ProfilePage from './pages/users/ProfilePage/ProfilePage';
import LoginForm from './pages/users/Login/LoginForm';
import { RegisterForm } from './pages/users/Register/RegisterForm';
import { Product } from './pages/users/ProductPage/Product';
import { ProductDetail } from './pages/users/ProductDetailPage/ProductDetail';
import { ShoppingCart } from './pages/users/ShoppingCart/ShoppingCart';
import Dashboard from './pages/admin/AdminPage/adminPage';



// Define Routes
const RouterCustom = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
      layout: MasterLayout,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
      layout: MasterLayout,
    },
    {
      path: ROUTERS.USER.PRODUCT,
      component: <Product />,
      layout: MasterLayout,
    },
    {
      path: ROUTERS.USER.PRODUCTDETAIL,
      component: <ProductDetail />,
      layout: MasterLayout,
    },
    {
      path: ROUTERS.USER.SHOPPINGCART,
      component: <ShoppingCart />,
      layout: MasterLayout,
    },
    {
      path: ROUTERS.USER.LOGIN,
      component: <LoginForm />,
      layout: SimpleLayout,
    },
    {
      path: ROUTERS.USER.REGISTER,
      component: <RegisterForm />,
      layout: SimpleLayout,
    },
  ];

  const adminRouters = [
    {
      path: ROUTERS.ADMIN.DASHBOARD,
      component: <Dashboard/>,
      layout: MasterLayout,
    },
    // {
    //   path: ROUTERS.ADMIN.NOTIFICATIONS,
    //   component: <Notification />,
    //   layout: AdminLayout,
    // },
    // {
    //   path: ROUTERS.ADMIN.ICONS,
    //   component: <Icons />,
    //   layout: AdminLayout,
    // },
  ];

  const allRouters = [...userRouters, ...adminRouters];

  return (
    <Routes>
      {allRouters.map((route, key) => {
        const Layout = route.layout || React.Fragment; // Default layout
        return (
          <Route
            key={key}
            path={route.path}
            element={<Layout>{route.component}</Layout>}
          />
        );
      })}
    </Routes>
  );
};

export default RouterCustom;
