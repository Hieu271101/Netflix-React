import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { Badge, Dropdown, Layout, Button } from 'antd'
import Sider from 'antd/es/layout/Sider'
import MenuAdminLayout from './MenuAdminLayout'
import { Content, Footer, Header } from 'antd/es/layout/layout'

AdminLayout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  BCR: PropTypes.any,
}

function AdminLayout({ children, title, BCR }) {
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(false)
  function getItem(label, key, icon, children) {
    return { key, icon, children, label }
  }
  const items = [
    getItem(
      // <Link to={`/admin/users/${currentUser?._id}`}>Profile</Link>,
      <Link to={`/admin/users/`}>Profile</Link>,
      'Profile',
      // <UserOutlined />,
    ),
    getItem(
      // <Button type="link" onClick={handleSignout}>
      <Button type="link">Logout</Button>,
      'Logout',
      // <LogoutOutlined />,
    ),
  ]
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="md"
        collapsedWidth={50}
      >
        <div
          style={{
            padding: '0 16px',
            height: 46,
            lineHeight: '50px',
            fontSize: 20,
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Link to="/" style={{ color: '#fff' }}>
            {/* {collapsed
              ? `${webConfigs[0]?.storeName?.slice(0, 1)}`
              : `${webConfigs[0]?.storeName}`} */}
          </Link>
        </div>
        <MenuAdminLayout />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: '#ffff' }}>
          <div className="flex justify-end gap-7 pr-3 flex-wrap">
            <div className="">
              <Badge dot>
                <Link to="#">New message</Link>
              </Badge>
            </div>
            <div className="">
              <Dropdown menu={{ items }} placement="bottomRight">
                <div className="flex items-center cursor-pointer">
                  {/* <UserOutlined
                  style={{ fontSize: 16, marginRight: 8 }}
                  title="User" /> */}
                  {/* <span>{currentUser?.username}</span> */}
                </div>
              </Dropdown>
            </div>
          </div>
        </Header>

        <Content style={{ margin: '0 16px' }}>
          <div style={{ margin: '16px 0' }} id="breadcrumbLocation">
            {BCR}
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              padding: 10,
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
              borderRadius: 4,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copy right by Hieu Do</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
