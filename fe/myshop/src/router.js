// router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTERS } from './utils/routers';
import { MasterLayout } from './pages/users/theme/MasterLayout/MasterLayout';
import { SimpleLayout } from './pages/users/theme/SimpleLauout/SimpleLayout';
import { HomePage } from './pages/users/HomePage/HomePage';
import ProfilePage from './pages/users/ProfilePage/ProfilePage';
import LoginForm from './pages/users/Login/LoginForm';
import { RegisterForm } from './pages/users/Register/RegisterForm';
import { Product } from './pages/users/ProductPage/Product';
import { ProductDetail } from './pages/users/ProductDetailPage/ProductDetail';
import { ShoppingCart } from './pages/users/ShoppingCart/ShoppingCart';
import { AdminLayout } from './pages/admin/AdminPage/adminLayout';
import Dashboard from './pages/admin/views/Dashboard.js';
import Notifications from './pages/admin/views/Notifications';
import Icons from "./pages/admin/views/Icons.js";
import Map from './pages/admin/views/Map';
import User from './pages/admin/views/User';
import Tables from './pages/admin/views/Tables';
import Typography from './pages/admin/views/Typography';
import Upgrade from './pages/admin/views/Upgrade';
export const userRouters = [
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

export const adminRouters = [
  {
    path: ROUTERS.ADMIN.DASHBOARD,
    component: <Dashboard />,
    icon: "nc-icon nc-bank",
    layout: AdminLayout,
  },
  {
    path: ROUTERS.ADMIN.NOTIFICATIONS,
    component: <Notifications />,
    layout: AdminLayout,
  },
  {
    path: ROUTERS.ADMIN.ICONS,
    component: <Icons />,
    layout: AdminLayout,
  },
  {
    path: ROUTERS.ADMIN.MAPS,
    component: <Map/>,
    layout: AdminLayout,
  },
  {
    path: ROUTERS.ADMIN.USER_PROFILE,
    component: <User/>,
    layout: AdminLayout,
  },
  {
    path: ROUTERS.ADMIN.TABLES,
    component: <Tables/>,
    layout: AdminLayout,
  },
  {
    path: ROUTERS.ADMIN.TYPOGRAPHY,
    component: <Typography />,
    layout: AdminLayout,
  },
  {
    path: ROUTERS.ADMIN.UPGRADE,
    component: <Upgrade />,
    layout: AdminLayout,
  },

];

const allRouters = [...userRouters, ...adminRouters];

const RouterCustom = () => (
  <Routes>
    {allRouters.map((route, key) => {
      const Layout = route.layout ? route.layout : React.Fragment;
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

export default RouterCustom;
