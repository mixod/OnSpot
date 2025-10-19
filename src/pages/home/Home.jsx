import React from "react";
import { Button, Carousel, Rate, Card, Row, Col, Input } from "antd";
import {
  UserOutlined,
  GlobalOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";

import { SendOutlined, MailOutlined } from "@ant-design/icons";
const data = [
  {
    id: 1,
    image: "/images/1.png",
    title: "Welcome to Onspot Wallet",
  },
  {
    id: 2,
    image: "/images/2.png",
    title: "No Internet, No Problem!",
  },
  {
    id: 3,
    image: "/images/3.png",
    title: "Your Money, Anytime, Anywhere",
  },
];

const statsData = [
  {
    title: "Happy Users",
    value: "25K+",
    icon: <UserOutlined style={{ fontSize: "2rem", color: "#f59e0b" }} />,
  },
  {
    title: "Total Countries",
    value: "15",
    icon: <GlobalOutlined style={{ fontSize: "2rem", color: "#f59e0b" }} />,
  },
  {
    title: "Currency Supports",
    value: "10+",
    icon: (
      <DollarCircleOutlined style={{ fontSize: "2rem", color: "#f59e0b" }} />
    ),
  },
];

const testimonialsData = [
  {
    id: 1,
    name: "Rajan S.",
    feedback:
      "Onspot Wallet is amazing! I can make payments even without internet, and it’s super easy to use.",
    image: "/images/1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sita K.",
    feedback:
      "The best offline digital wallet I’ve ever used! Super fast and reliable.",
    image: "/images/2.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Bikash M.",
    feedback:
      "Using Onspot Wallet has made transactions so easy even when I’m in remote areas.",
    image: "/images/3.png",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div>
      {/* part 1 */}
      <div className="w-full" data-aos="fade-up">
        <Carousel arrows infinite autoplay>
          {data.map((banner) => (
            <div key={banner.id} className="relative">
              {/* Responsive image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-[60vh] md:h-[80vh] lg:h-screen object-cover"
              />

              {/* Overlay with centered text */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
                <h3
                  className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold text-center leading-tight"
                  data-aos="zoom-in"
                >
                  {banner.title}
                </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* part 2 */}

      <div className="relative bg-gradient-to-br from-[#0B0B45] via-[#1B03A3] to-[#3E1AE0] py-16 md:py-20 overflow-hidden">
        {/* Decorative gradient glow */}
        <div className="absolute top-20 left-10 w-60 sm:w-72 h-60 sm:h-72 bg-amber-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white border-l-4 border-amber-500 pl-3 mb-8 sm:mb-12"
            data-aos="fade-right"
          >
            Description
          </h2>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-stretch bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
            {/* LEFT IMAGE */}
            <div
              className="md:w-1/2 w-full h-56 sm:h-72 md:h-auto"
              data-aos="fade-right"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxAvG3u2T2ESM8J_TxqYCIdzLC0V4_wcsfw&s"
                alt="Onspot Wallet App"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div
              className="md:w-1/2 text-white flex flex-col justify-center p-6 sm:p-8 md:p-10"
              data-aos="fade-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
                Onspot Wallet
              </h2>

              <p className="text-gray-200 text-base sm:text-lg mb-5 sm:mb-6 leading-relaxed">
                A revolutionary digital wallet that works <b>offline</b>! Make
                payments, manage transactions, and stay in control even without
                an internet connection. Fast, secure, and reliable — anytime,
                anywhere.
              </p>

              <ul className="text-gray-200 mb-6 sm:mb-8 list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Works without internet</li>
                <li>Instant offline transactions</li>
                <li>Secure and easy-to-use</li>
                <li>Track all your spending</li>
              </ul>

              <Button
                type="primary"
                size="large"
                className="bg-amber-500 hover:bg-amber-600 border-none font-semibold text-white flex items-center justify-center sm:justify-start gap-2 shadow-lg w-full sm:w-auto"
                data-aos="zoom-in"
              >
                Learn More <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* part 3 */}
      <div className="relative w-full py-20" data-aos="fade-up">
        <img
          src="https://coolbackgrounds.imgix.net/2SvDjcgyav5C1DOb79JKXl/d3b06db5bb6bdb4ab237f666b5b4980e/compute-ea4c57a4.png?w=3840&q=60&auto=format,compress"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h2
            className="text-white border-l-4 border-amber-500 pl-2 text-3xl mb-10"
            data-aos="fade-down"
          >
            Trusted Users
          </h2>

          <Row gutter={[16, 16]} justify="center">
            {statsData.map((stat, index) => (
              <Col xs={24} sm={12} md={8} key={index} data-aos="zoom-in">
                <Card
                  hoverable
                  className="text-center py-6"
                  style={{ backgroundColor: "#8A79F2" }}
                >
                  <div className="mb-4">{stat.icon}</div>
                  <h2 className="text-2xl font-bold">{stat.value}</h2>
                  <p className="text-gray-800">{stat.title}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* part 4 */}
      <div
        className="relative w-full py-20 bg-gradient-to-r from-[#7B68EE]/20 via-[#6A5ACD]/20 to-[#5C2EF2]/20"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
            data-aos="fade-down"
          >
            What Our Users Say
          </h2>

          <Carousel autoplay arrows>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="flex justify-center px-4">
                <div
                  className="bg-white/20 backdrop-blur-lg p-8 text-center shadow-lg rounded-lg transform transition duration-300"
                  data-aos="flip-up"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#7B68EE]"
                  />
                  <p className="text-gray-100 italic mb-4">
                    "{testimonial.feedback}"
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <Rate
                    disabled
                    defaultValue={testimonial.rating}
                    className="mt-2 text-amber-400"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* part 5 */}
      <div className="relative bg-gradient-to-br from-[#1B03A3] via-[#3E1AE0] to-[#0B0B45] py-16 md:py-20 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,193,7,0.15),_transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]"></div>

        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10"
          data-aos="fade-up"
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Subscribe for Updates
          </h2>

          <p className="text-gray-200 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
            Stay up to date with the latest news, updates, and features from{" "}
            <b>Onspot Wallet</b>. Join our community today!
          </p>

          {/* Subscribe Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-full p-4 sm:p-3 border border-white/20 shadow-xl">
            <Input
              size="large"
              prefix={<MailOutlined className="text-gray-400" />}
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-gray-300 border-none focus:shadow-none w-full"
            />
            <Button
              type="primary"
              size="large"
              className="bg-amber-500 hover:bg-amber-600 border-none font-semibold text-white px-6 sm:px-8 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Subscribe <SendOutlined />
            </Button>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm mt-5">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
