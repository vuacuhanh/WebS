import React from 'react'
import { HomePage } from './pages/users/HomePage/HomePage'
import {ROUTERS} from "./utils/routers"
import { Routes, Route } from 'react-router-dom'
import { MasterLayout } from './pages/users/theme/MasterLayout/MasterLayout'
import ProfilePage from './pages/users/ProfilePage/ProfilePage'
import LoginForm from './pages/users/Login/LoginForm'
import { RegisterForm } from './pages/users/Register/RegisterForm'
import { SimpleLayout } from './pages/users/theme/SimpleLauout/SimpleLayout'
import { Product } from './pages/users/ProductPage/Product'
import { ProductDetail } from './pages/users/ProductDetailPage/ProductDetail'
import { ShoppingCart } from './pages/users/ShoppingCart/ShoppingCart'

const renderUserBrowser = () =>{
    const userRouters = [
        {
            path:ROUTERS.USER.HOME,
            component:<HomePage/>,
            layout: MasterLayout
        },
        {
            path:ROUTERS.USER.PROFILE,
            component:<ProfilePage/>,
            layout: MasterLayout
        },
        {
            path:ROUTERS.USER.PRODUCT,
            component:<Product />,
            layout: MasterLayout
        },
        {
          path:ROUTERS.USER.PRODUCTDETAIL,
          component:<ProductDetail />,
          layout: MasterLayout
        },
        {
          path:ROUTERS.USER.SHOPPINGCART,
          component:<ShoppingCart/>,
          layout: MasterLayout
        },
        {
            path:ROUTERS.USER.LOGIN,
            component:<LoginForm />,
            layout: SimpleLayout
        },
        {
            path:ROUTERS.USER.REGISTER,
            component:<RegisterForm />,
            layout: SimpleLayout
        },
    ];
    // const adminRouters = [
    //     {
    //         path:ROUTERS.USER.HOME,
    //         component:<HomePage/>
    //     },

    // ]
    return (
        <Routes>
          {userRouters.map((route, key) => {
            const Layout = route.layout || MasterLayout;
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

const RouterCustom = () => {
  return renderUserBrowser (
    <div>Custom</div>
  )
}

export default RouterCustom
