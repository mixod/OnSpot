import { Input, Avatar, Tooltip, Button } from "antd";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-gray-100  w-full z-10 h-16  top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Tooltip title="Profile">
            <Avatar
              size="large"
              icon={<UserOutlined />}
              className="cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Tooltip>
        </div>
        <div className="flex-1 max-w-lg mx-4">
          <Input.Search
            placeholder="Search something..."
            allowClear
            enterButton
            className="w-full"
            size="middle"
          />
        </div>
        <div className="flex gap-2">
          <Button
            type="primary"
            color="purple"
            variant="solid"
            onClick={() => navigate("/login")}
            icon={<LoginOutlined />}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
