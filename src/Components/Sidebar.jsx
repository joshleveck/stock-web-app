import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaTachometerAlt, FaList, FaGithub } from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      className="sidebar"
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Stocks
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
          <MenuItem icon={<FaList />}>Explore</MenuItem>
        </Menu>
        {/* <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="withSuffix"
            icon={<FaRegLaughWink />}
          >
            <MenuItem>'submenu' 1</MenuItem>
            <MenuItem>'submenu' 2</MenuItem>
            <MenuItem>'submenu' 3</MenuItem>
          </SubMenu>
          <SubMenu title="multiLevel" icon={<FaList />}>
            <MenuItem>'submenu' 1 </MenuItem>
            <MenuItem>'submenu' 2 </MenuItem>
            <SubMenu title={`'submenu' 3`}>
              <MenuItem>'submenu' 3.1 </MenuItem>
              <MenuItem>'submenu' 3.2 </MenuItem>
              <SubMenu title={`'submenu' 3.3`}>
                <MenuItem>'submenu' 3.3.1 </MenuItem>
                <MenuItem>'submenu' 3.3.2 </MenuItem>
                <MenuItem>'submenu' 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu> */}
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/joshleveck/stock-web-app"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> View Source Code</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
