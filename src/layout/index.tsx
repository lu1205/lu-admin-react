import React, {useState} from 'react';

import {Layout} from 'antd';

import Slide from './slide'
import Header from './header'
import Content from './content'
import Footer from './footer'
import {UserOutlined} from "@ant-design/icons";

const Layouts: React.FC = () => {
    const [items] = useState([
        {
            key: '/',
            path: 'home',
            icon: <UserOutlined/>,
            label: '首页',
        },
        {
            key: '/about',
            path: 'about',
            icon: <UserOutlined/>,
            label: '关于',
        },
        {
            key: '/error',
            path: 'error',
            icon: <UserOutlined/>,
            label: '错误页面',
        },
    ])
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{width: "100%", height: "100%"}}>
            <Slide items={items} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Layout>
                <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
                <Content/>
                <Footer/>
            </Layout>
        </Layout>
    );
};
export default Layouts;


/*import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Button, theme} from 'antd';
import {Outlet} from "react-router-dom";

const {Header, Sider, Content, Footer} = Layout;

const Layouts: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const items = [
        {
            key: '1',
            icon: <UserOutlined/>,
            label: 'nav 1',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined/>,
            label: 'nav 2',
        },
        {
            key: '3',
            icon: <UploadOutlined/>,
            label: 'nav 3',
        },
    ]

    return (
        <Layout style={{width: "100%", height: "100%"}}>
            <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="lg" collapsedWidth="0"
                   onBreakpoint={(broken) => setCollapsed(broken)}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet/>
                </Content>
                <Footer style={{textAlign: 'center'}}>LU-ADMIN-REACT</Footer>
            </Layout>
        </Layout>
    );
};

export default Layouts;*/
