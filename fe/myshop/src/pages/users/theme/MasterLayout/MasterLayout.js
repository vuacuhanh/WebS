import React from 'react'
import { HeaderLayout } from '../header/HeaderLayout'
import { FooterLayout } from '../footer/FooterLayout'

export const MasterLayout = ({ children, ...props }) => {
  return (
    <div>
        <HeaderLayout/>
        {children}
        <FooterLayout />
    </div> 
  )
}
