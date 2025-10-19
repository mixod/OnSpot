import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import Header from "../Header/Header";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div>
        <Header />
      </div>

      <nav className="sticky top-0 z-50 mx-6">
        <div className="max-w-7xl mx-auto bg-gray-100 shadow-2xl rounded-2xl px-8 py-4 flex justify-between items-center">
          {/* Left - Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="font-bold text-lg text-gray-800">
              OnSpotWallet
            </span>
          </div>

          {/* Right - Desktop Menu */}
          <div className="hidden md:flex items-center justify-end w-auto">
            <ul>
              {menuItems.map((item) => (
                <li key={item.path} className="inline-block mx-4">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-purple-500 font-semibold pb-1"
                        : "text-gray-800 hover:text-purple-500"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile - Hamburger Icon */}
          <div className="md:hidden">
            <Button
              type="text"
              icon={<MenuOutlined className="text-xl" />}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            onClick={() => setOpen(false)}
            className="border-none bg-transparent"
          >
            {menuItems.map((item) => (
              <Menu.Item key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-semibold pb-1"
                      : "text-gray-800"
                  }
                >
                  {item.label}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
