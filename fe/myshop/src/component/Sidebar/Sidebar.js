import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'perfect-scrollbar';

import logo from '../../logo.svg';

let ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();

  const activeRoute = (routeName) => location.pathname.indexOf(routeName) > -1 ? 'active' : '';

  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(sidebar.current, { suppressScrollX: true, suppressScrollY: false });
    }
    return () => {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
    };
  }, []);

  if (!Array.isArray(props.routes)) {
    console.error('Sidebar expects `routes` to be an array. Received:', props.routes);
    return null;
  }

  return (
    <div className="sidebar" data-color={props.bgColor} data-active-color={props.activeColor}>
      <div className="logo">
        <a href="/" className="simple-text logo-mini">
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a href="/" className="simple-text logo-normal">
          My App
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => (
            <li
              className={`${activeRoute(prop.path)} ${prop.pro ? 'active-pro' : ''}`}
              key={key}
            >
              <NavLink to={prop.path} className="nav-link">
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </NavLink>
            </li>
          ))}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
