import React, { useState } from 'react';
import {LockOutlined, UploadOutlined , UserOutlined,AppstoreOutlined, TeamOutlined, FileTextOutlined, CalendarOutlined, SolutionOutlined, AreaChartOutlined, SettingOutlined, BellOutlined, MessageOutlined, DownOutlined, MailOutlined, ControlOutlined, UsergroupAddOutlined  } from '@ant-design/icons';
import { Layout, Menu, Modal, theme, Avatar, Dropdown, } from 'antd';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PortfolioList from '../screen/PortfolioList';
import InternshipForm from '../components/InternshipForm';
import logo from '../Image/logo.png'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFormType, setSelectedFormType] = useState(null);
  const [selectedKey, setSelectedKey] = useState('/candidates'); // Set initial selected key to '/candidates'
  const [portfolio, setPortfolio] = useState([]);  
  const [showDot, setShowDot] = useState(false);  // State to manage dot visibility
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleDropdownSelect = ({ key }) => {
    setSelectedFormType(key);
    setIsModalVisible(true); // Open the modal
  };
  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
    navigate(key);
    if (key === '/rolemaster') {
      setShowDot(true); 
    }
  };
 

  const profileMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" >Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );


  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ background: '#EFF4F9' }}
      >
        <div className="demo-logo-vertical" />
        <div style={{ padding: '6px', textAlign: 'center', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', margin: '15px' }}>
          <img src={logo} alt="Logo" style={{ width: '70%', maxWidth: '300px' }} />
        </div>
        <Menu mode="inline" selectedKeys={[selectedKey]} onClick={handleMenuClick} style={{ background: '#EFF4F9' }}>
          <Menu.Item key="/" icon={<AppstoreOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="/portfolio" icon={<UserOutlined />}>Portfolio</Menu.Item>
          <Menu.Item key="/notifications" icon={<BellOutlined />}>Notifications</Menu.Item>
          <Menu.Item key="/notices" icon={<MailOutlined />}>Notices</Menu.Item>
          <Menu.Item key="/auction" icon={<MessageOutlined />}>Auction</Menu.Item>
          <Menu.Item key="/data-upload" icon={<UploadOutlined />}>Data Upload</Menu.Item>
          <Menu.Item key="/control-panel" icon={<ControlOutlined />}>Control Panel</Menu.Item>
          <Menu.Item key="/user-management" icon={<UsergroupAddOutlined />}>User Management</Menu.Item>
          <Menu.Item key="/permissions" icon={<LockOutlined />}>Permissions</Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ backgroundColor: 'white' }}>

         {/* Header Part */}
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            background: colorBgContainer,
          }}
        >
            <div style={{ fontSize: '16px', marginBottom: '8px' }}>
              Welcome Back, <span style={{ fontWeight: 'bold' }}>Tushar</span> 🎉
            </div>
            
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <SettingOutlined style={{ fontSize: '20px', cursor:'pointer' }} />
            <BellOutlined style={{ fontSize: '20px', cursor:'pointer' }} />
            <MessageOutlined style={{ fontSize: '20px', cursor:'pointer' }} />
            <Avatar style={{ margin: "2px", cursor:'pointer' }} icon={<UserOutlined />} />
            <Dropdown overlay={profileMenu} trigger={['click']}>
              <DownOutlined style={{ fontSize: '15px', cursor:'pointer' }} />
            </Dropdown>
          </div>
        </Header>
        

        {/* header part complete */}
        <div style={{ backgroundColor: 'white', padding: '0px 20px', fontSize: '25px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>          
              Portfolio                        
        </div>


        <Content
          style={{
            margin: '5px 16px 0',
          }}
        >
          <Routes>
            <Route path="/" element={<InternshipForm />} />
            <Route path="/portfolio" element={<PortfolioList portfolio={portfolio} />} />                     
          </Routes>
        </Content>
      </Layout>  
    </Layout>
  );
};

export default Dashboard;
