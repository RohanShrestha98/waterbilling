import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './coustomer.css';

export default function Sidebar() {
  const sidebar = [
    {
      id: '1',
      icon: 'img/Dashboard.svg',
      name: 'Home',
      link: '/',
    },
    {
      id: '2',
      icon: 'img/bills.png',
      name: 'Bills',
      link: '/bills',
    },
    {
      id: '3',
      icon: 'img/Analytics.png',
      name: 'Analytics',
      link: '/analytics',
    },
    {
      id: '4',
      icon: 'img/Dashboard.svg',
      name: 'Profile',
      link: '/profile',
    },
  ];

  const [selectedItemId, setSelectedItemId] = useState('');

  const handleItemClick = (link) => {
    navigate(link)
    window.location.reload();
  };

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('user2');
    navigate("/")
    window.location.reload();
  };

  const location = useLocation();

  return (
    <div className={`sidebar `}>
      <div className="logo2">
        <img src="img/logo.png" alt="" />
      </div>
      <div className="sidebarNavigation">
        {sidebar.map((item) => (
          <div key={item.id}>
            <Link
              to={item.link}
              className={`sidebarnames ${location.pathname === item.link ? 'selected' : ''}`}
              onClick={() => handleItemClick(item.link)}
            >
              <img src={item.icon} alt="" />
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
