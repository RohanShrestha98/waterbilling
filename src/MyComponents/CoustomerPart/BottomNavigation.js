import React from 'react'
import "./coustomer.css"
import { Link, useLocation } from 'react-router-dom';

export default function BottomNavigation() {
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
      const location = useLocation();
  return (
    <div className='bottomNavigation'>
       {sidebar.map((item) => (
          <div key={item.id}>
            <Link
              to={item.link}
              className={`navigationbottom ${location.pathname === item.link ? 'navigationbottomselected' : ''}`}
             
            >
              <img src={item.icon} alt="" />
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}
    </div>
  )
}
