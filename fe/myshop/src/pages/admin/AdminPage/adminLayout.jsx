import React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import { Outlet, useLocation } from 'react-router-dom';

import DemoNavbar from '../../../component/Navbars/DemoNavbar.js';
import Footer from '../../../component/Footer/Footer.js';
import Sidebar from '../../../component/Sidebar/Sidebar.js';
import FixedPlugin from '../../../component/FixedPlugin/FixedPlugin.js';

import { adminRouters } from '../../../router.js'; // Import adminRouters từ router.js

let ps;

export const AdminLayout = () => {
  const [backgroundColor, setBackgroundColor] = React.useState('black');
  const [activeColor, setActiveColor] = React.useState('info');
  const mainPanel = React.useRef();
  const location = useLocation();

  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle('perfect-scrollbar-on');
    }
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
        document.body.classList.toggle('perfect-scrollbar-on');
      }
    };
  }, []);

  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  const handleActiveClick = (color) => {
    setActiveColor(color);
  };

  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="wrapper">
      <Sidebar routes={adminRouters} bgColor={backgroundColor} activeColor={activeColor} />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar />
        <div className="content">
          <Outlet />
        </div>
        <Footer fluid />
      </div>
      <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      />
    </div>
  );
};

export default AdminLayout;
