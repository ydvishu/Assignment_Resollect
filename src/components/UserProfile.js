import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, Menu, Form, Input, Button, Upload, message, Row, Col } from 'antd';
import { BellOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const UserProfile = () => {
  const [profile, setProfile] = useState({
    avatar: null,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    contactNumber: '123-456-7890',
    city: 'New York',
    state: 'NY'
  });

  const handleProfileChange = (changedValues) => {
    setProfile({
      ...profile,
      ...changedValues
    });
  };

  const handleAvatarChange = (info) => {
    if (info.file.status === 'done') {
      // Get this URL from response in a real world scenario
      const avatarUrl = URL.createObjectURL(info.file.originFileObj);
      setProfile({
        ...profile,
        avatar: avatarUrl
      });
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
      <Layout style={{ height: '100vh', backgroundColor: '#fff'}}>
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '0 20px', boxShadow: '0 2px 8px #f0f1f2' }}>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>MY Profile</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BellOutlined style={{ fontSize: '20px', marginRight: '20px' }} />
            <Dropdown overlay={menu} placement="bottomRight">
              <div>
                <Avatar src={profile.avatar} icon={<UserOutlined />} />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ padding: '20px', maxWidth: '600px', margin: 'auto'}}>
          <Form
            layout="vertical"
            initialValues={profile}
            onValuesChange={(changedValues) => handleProfileChange(changedValues)}
          >
            <Form.Item style={{display: 'flex', justifyContent: 'center'}}>
              <Upload
                name="avatar"
                listType="picture"
                showUploadList={false}
                beforeUpload={() => false} // Prevent automatic upload
                onChange={handleAvatarChange}
              >
                <Avatar size={64} icon={<UserOutlined />} />
              </Upload>
              {profile.avatar && <Avatar src={profile.avatar} size={64} style={{ marginTop: '10px' }} />}
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="firstName" label="First Name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>  
                <Form.Item name="lastName" label="Last Name">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            


            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item name="contactNumber" label="Contact Number">
              <Input />
            </Form.Item>
            <Form.Item name="city" label="City">
              <Input />
            </Form.Item>
            <Form.Item name="state" label="State">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
  );
};

export default UserProfile;
