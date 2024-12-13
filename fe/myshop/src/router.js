import React, { Component } from 'react'
import { HomePage } from './pages/users/HomePage/HomePage'
import {ROUTERS} from "./utils/routers"
import { Routes, Route } from 'react-router-dom'
import { MasterLayout } from './pages/users/theme/MasterLayout/MasterLayout'
import ProfilePage from './pages/users/ProfilePage/ProfilePage'

const renderUserBrowser = () =>{
    const userRouters = [
        {
            path:ROUTERS.USER.HOME,
            component:<HomePage/>
        },
        {
            path:ROUTERS.USER.PROFILE,
            component:<ProfilePage/>
        },

    ]
    return(
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item,key) => (
                    <Route key = {key} path={item.path} element = {item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
  return renderUserBrowser (
    <div>Custom</div>
  )
}

export default RouterCustom
