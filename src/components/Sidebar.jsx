import React from "react";
import { navbar } from "./index";
import { HashLink as Link } from 'react-router-hash-link'

const Sidebar = ({className = ''}) => {
  return (
    <nav className={`${className}`}>
      {
        navbar.map((item) => {
          const {id, location, style, icon} = item
          return (
            <Link 
              to={location} 
              key={id} 
              className={style}
              smooth
              >
              {icon}
            </Link>
          )
        }
        )
      }
    </nav>
  );
};

export default Sidebar;
