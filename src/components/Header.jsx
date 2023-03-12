import React from "react";
import avatar from "../assets/user.png";

function Header() {
  return (
    <header className="container">
      <div className="serach-input">
        <svg
          width="22"
          height="22"
          fill="none"
          stroke="#5c5c5c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          name="search"
          className="search"
          placeholder="Search users payments"
        />
      </div>
      <div className="header-profile">
        <div className="profile-avatar">
          <img src={avatar} alt="avatar" width="100%" />
        </div>
        <div className="profile-info">
          <span className="username">Rishabh Vishwakarma</span>
          <br />
          <span>Admin</span>
        </div>
        <div className="profile-notification-icon">
          <svg
            width="22"
            height="22"
            fill="#2b2b2b"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.75c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2Zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32v-.68c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.11 6 7.67 6 10.75v5l-2 2v1h16v-1l-2-2Zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6Z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
