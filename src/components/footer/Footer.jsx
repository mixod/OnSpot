import React from "react";
import { Layout, Row, Col, Divider } from "antd";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="bg-gray-900 text-purple-500 px-6 md:px-20 py-10">
      {/* Top Section */}
      <Row gutter={[32, 32]} justify="space-between">
        {/* Brand Section */}
        <Col xs={24} sm={12} md={8}>
          <h2 className="text-2xl font-semibold text-purple-500 mb-3">
            OnSpot Wallet
          </h2>
          <p className="text-gray-400 text-sm leading-6">
            Manage your money smarter. Send, receive, and track your digital
            payments instantly — all in one secure place.
          </p>
        </Col>

        {/* Links Section */}
        <Col xs={12} sm={6} md={4}>
          <h3 className="text-lg text-purple-500 mb-3 font-medium">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-purple-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-purple-400">
                About
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-purple-400">
                Features
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-purple-400">
                Contact
              </a>
            </li>
          </ul>
        </Col>

        {/* Support Section */}
        <Col xs={12} sm={6} md={4}>
          <h3 className="text-lg text-purple-500 mb-3 font-medium">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="/help" className="hover:text-blue-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-400">
                Terms of Service
              </a>
            </li>
          </ul>
        </Col>

        {/* Socials Section */}
        <Col xs={24} sm={24} md={6}>
          <h3 className="text-lg text-purple-500 mb-3 font-medium">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FacebookFilled />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400"
            >
              <TwitterSquareFilled />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              <InstagramFilled />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <LinkedinFilled />
            </a>
          </div>
        </Col>
      </Row>

      <Divider className="bg-gray-700" />

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} OnSpot Wallet. All rights reserved.
      </div>
    </Footer>
  );
};

export default AppFooter;
