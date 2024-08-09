import React, { Component } from 'react';
import { FcBullish } from "react-icons/fc";
import { Outlet } from 'react-router-dom';
import { SideBar } from './SideBar';

export const Layout = () => {
    return (
        <div className='flex flex-row bg-neutral-200 overflow-hidden h-screen'>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
    )
}