import React from "react";
import logo from "../assets/Edviron.png";

function Sidebar() {
  return (
    <div className="sidebar p-4">
      <div className="logo w-75 mx-auto">
        <img src={logo} alt="logo" width="100%" />
      </div>
      <div className="sidebar-links mt-5">
        <ul className="sidebar-list-group">
          <li className="list-item active">
            <span>
              <svg
                width="20"
                height="20"
                fill="#303030"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5 11.5a4.5 4.5 0 1 1 0-9.002 4.5 4.5 0 0 1 0 9.002Zm.5 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm10-10a4.501 4.501 0 0 1-1.722-8.657A4.5 4.5 0 1 1 17 11.5Zm0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9ZM6.5 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm10-10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
              </svg>
            </span>
            <span className="list-text">Dashboard</span>
          </li>
          <li className="list-item ">
            <span>
              <svg
                width="20"
                height="20"
                fill="#8a8a8a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 22a8 8 0 0 1 16 0h-2a6 6 0 1 0-12 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"></path>
              </svg>
            </span>
            <span className="list-text text-body-secondary">User</span>
          </li>
          <li className="list-item ">
            <span>
              <svg
                width="20"
                height="20"
                fill="#8a8a8a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m4.828 21-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828ZM20 15V5H4v14L14 9l6 6Zm0 2.828-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path>
              </svg>
            </span>
            <span className="list-text text-body-secondary">Projects</span>
          </li>
          <li className="list-item ">
            <span>
              <svg
                width="20"
                height="20"
                fill="#8a8a8a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5ZM19 19.09H5V4.91h14v14.18ZM6 15h12v2H6v-2Zm0-4h12v2H6v-2Zm0-4h12v2H6V7Z"></path>
              </svg>
            </span>
            <span className="list-text text-body-secondary">Sales</span>
          </li>
        </ul>
        <ul className="sidebar-list-group">
          <li className="list-item">
          <svg width="20" height="20" fill="#8a8a8a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.432 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65a.488.488 0 0 0-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65Zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.35-2.48-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74 0-.2.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.35 2.48 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13ZM12.002 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"></path>
         </svg>
            <span className="list-text">Settings</span>
          </li>
          <li className="list-item ">
            <span>
            <svg width="20" height="20" fill="#ff8585" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22Zm7-6v-3h-8v-2h8V8l5 4-5 4Z"></path>
           </svg>
            </span>
            <span className="list-text text-danger">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
