import React from 'react';
import Header from '../Pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const MainComponent = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainComponent;