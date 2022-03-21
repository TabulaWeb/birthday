import React, {useState} from "react";
import { NavLink  } from "react-router-dom";
import './index.css';

const Menu = () => {
  return (
    <header className="menu-nav">
      <nav>
        <NavLink  to='/'>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.27446 10.1262C5 10.7229 5 11.4018 5 12.7595V16.9999C5 18.8856 5 19.8284 5.58579 20.4142C6.11733 20.9457 6.94285 20.9949 8.5 20.9995V16C8.5 14.8954 9.39543 14 10.5 14H13.5C14.6046 14 15.5 14.8954 15.5 16V20.9995C17.0572 20.9949 17.8827 20.9457 18.4142 20.4142C19 19.8284 19 18.8856 19 16.9999V12.7595C19 11.4018 19 10.7229 18.7255 10.1262C18.4511 9.52943 17.9356 9.08763 16.9047 8.20401L15.9047 7.34687C14.0414 5.74974 13.1098 4.95117 12 4.95117C10.8902 4.95117 9.95857 5.74974 8.09525 7.34687L7.09525 8.20401C6.06437 9.08763 5.54892 9.52943 5.27446 10.1262ZM13.5 20.9999V16H10.5V20.9999H13.5Z" fill="#CCD5DB"/>
          </svg>
        </NavLink >
        <NavLink  to='/music'>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM10.7828 7.99043L16.4265 11.1258C17.1123 11.5068 17.1123 12.4932 16.4265 12.8742L10.7828 16.0096C9.98293 16.4539 9 15.8756 9 14.9606V9.03942C9 8.12444 9.98293 7.54607 10.7828 7.99043Z" fill="#CCD5DB"/>
          </svg>
        </NavLink >
        <NavLink className={'link-date'}  to='/info'>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z" fill="#CCD5DB"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V13C22 12.5286 22 12.2929 21.8536 12.1464C21.7071 12 21.4714 12 21 12H3C2.5286 12 2.29289 12 2.14645 12.1464C2 12.2929 2 12.5286 2 13V18ZM7 15C7 14.5286 7 14.2929 7.14645 14.1464C7.29289 14 7.5286 14 8 14H10C10.4714 14 10.7071 14 10.8536 14.1464C11 14.2929 11 14.5286 11 15C11 15.4714 11 15.7071 10.8536 15.8536C10.7071 16 10.4714 16 10 16H8C7.5286 16 7.29289 16 7.14645 15.8536C7 15.7071 7 15.4714 7 15ZM7.14645 18.1464C7 18.2929 7 18.5286 7 19C7 19.4714 7 19.7071 7.14645 19.8536C7.29289 20 7.5286 20 8 20H10C10.4714 20 10.7071 20 10.8536 19.8536C11 19.7071 11 19.4714 11 19C11 18.5286 11 18.2929 10.8536 18.1464C10.7071 18 10.4714 18 10 18H8C7.5286 18 7.29289 18 7.14645 18.1464ZM13 15C13 14.5286 13 14.2929 13.1464 14.1464C13.2929 14 13.5286 14 14 14H16C16.4714 14 16.7071 14 16.8536 14.1464C17 14.2929 17 14.5286 17 15C17 15.4714 17 15.7071 16.8536 15.8536C16.7071 16 16.4714 16 16 16H14C13.5286 16 13.2929 16 13.1464 15.8536C13 15.7071 13 15.4714 13 15ZM13.1464 18.1464C13 18.2929 13 18.5286 13 19C13 19.4714 13 19.7071 13.1464 19.8536C13.2929 20 13.5286 20 14 20H16C16.4714 20 16.7071 20 16.8536 19.8536C17 19.7071 17 19.4714 17 19C17 18.5286 17 18.2929 16.8536 18.1464C16.7071 18 16.4714 18 16 18H14C13.5286 18 13.2929 18 13.1464 18.1464Z" fill="#CCD5DB"/>
            <path d="M7 3L7 6" stroke="#CCD5DB" strokeWidth="2" strokeLinecap="round"/>
            <path d="M17 3L17 6" stroke="#CCD5DB" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </NavLink >
        <NavLink  to='/profile'>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6515 20.4054C20.2044 20.2902 20.5336 19.7117 20.2589 19.2183C19.6533 18.1307 18.6993 17.1749 17.4789 16.4465C15.9071 15.5085 13.9812 15 12 15C10.0188 15 8.09295 15.5085 6.52115 16.4465C5.30072 17.1749 4.34669 18.1307 3.74111 19.2183C3.46641 19.7117 3.79565 20.2902 4.34847 20.4054C9.39527 21.4572 14.6047 21.4572 19.6515 20.4054Z" fill="#CCD5DB"/>
            <circle cx="12" cy="8" r="5" fill="#CCD5DB"/>
          </svg>
        </NavLink >
      </nav>
    </header>
  );
};

export default Menu;