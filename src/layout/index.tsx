import { useState } from 'react'

import { Layout } from 'antd'

import Slide from './slide'
import Header from './header'
import Content from './content'
import Footer from './footer'
import { UserOutlined } from '@ant-design/icons'

const Layouts = () => {
    const items: Array<any> = [
        {
            key: '/',
            path: 'home',
            icon: <UserOutlined />,
            label: '首页'
        },
        {
            key: '/about',
            path: 'about',
            icon: <UserOutlined />,
            label: '关于'
        },
        {
            key: '/error',
            path: 'error',
            icon: <UserOutlined />,
            label: '错误页面',
            children: [
                {
                    key: '/error/403',
                    path: '403',
                    icon: <UserOutlined />,
                    label: '403'
                },
                {
                    key: '/error/404',
                    path: '404',
                    icon: <UserOutlined />,
                    label: '404'
                },
                {
                    key: '/error/500',
                    path: '500',
                    icon: <UserOutlined />,
                    label: '500'
                }
            ]
        }
    ]
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Layout style={{ width: '100%', height: '100%' }}>
            <Slide items={items} collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout>
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content />
                <Footer />
            </Layout>
        </Layout>
    )
}
export default Layouts
