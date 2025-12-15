import React from 'react';
import { useApp } from '../context/AppContext';
import './SideMenu.css';

const SideMenu = () => {
  const { selectedMenu, setSelectedMenu } = useApp();

  const menuItems = ['Apps', 'Documents'];

  return (
    <aside className="side-menu">
      {menuItems.map((item) => (
        <button
          key={item}
          className={`menu-item ${selectedMenu === item ? 'active' : ''}`}
          onClick={() => setSelectedMenu(item)}
        >
          {item}
        </button>
      ))}
    </aside>
  );
};

export default SideMenu;

