import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import profile from "../../../images/icons/profile-1.jpg";
import { useMsal } from "@azure/msal-react";
import bell from "../../../images/icons/bell-02.svg";
import light from "../../../images/icons/light.png";

import srm_white_logo from "../../../images/Logo/logo_srm_white.png";
import srm_dark_logo from "../../../images/Logo/srm_logo_dark.png";

import nexus from "../../../images/Logo/NexusLabs-Logo.png";
import { ThemeContext } from "../../../ThemContent";

function Topbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { instance, accounts } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "http://localhost:3000/", // 🔁 Back to login page or home
    });
  };

  console.log(accounts);
  return (
    <nav className="header-main" role="navigation">
      <div className="header">
        <div className="header-left">
          <h6 className="nav-title">
            {/* <img src={nexus}/> */}
            {theme === "light" ? (
              <img src={srm_dark_logo} className="sidebar-logo" />
            ) : (
              <img src={srm_white_logo} className="sidebar-logo" />
            )}
          </h6>
        </div>
        <div className="header-right">
          {/* <div className="header-icon">
        <img src={messageIcon} alt="Message" />
      </div> */}
          {/* <div className="header-icon">
        <img src={bellIcon} alt="Notification" />
      </div> */}

          <span></span>
          <div className="header-profile">
            <div className="d-flex align-items-center gap-2">
              <img
                src={light}
                className="header-notifi"
                onClick={toggleTheme}
                title={theme}
              />
              <img src={bell} className="header-notifi" />
              <div className="profile-img-wrapper">
                <img
                src={profile}
                className="profile-img"
                alt="Profile"
                title={`${accounts[0]?.name}`}
              />
              {/* <img src={dropdown} alt="Dropdown" /> */}
               <ul className="header-profile-dropdown">
              <Link to={"/profile"}>
                <li>My Profile</li>
              </Link>
              {/* <li>Manage Address</li> */}
              <li className="logout" onClick={() => handleLogout()}>
                Logout
              </li>
            </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      <div className="header-child"></div>
    </nav>
  );
}

export default Topbar;
