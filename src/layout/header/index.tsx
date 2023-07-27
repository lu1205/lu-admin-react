import React from "react";
import {Layout, Button, theme, Dropdown} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import './index.scss'
import {useNavigate} from "react-router-dom";

const Header: React.FC = (props) => {
    const {collapsed, setCollapsed} = props
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const navigate = useNavigate()
    const logout = () => {
        navigate('/login')
    }
    const items = [
        {
            key: '1',
            label: (
                <div onClick={logout}>退出登录</div>
            ),
        },
    ];
    return (
        <Layout.Header style={{padding: 0, background: colorBgContainer}}>
            <div className='head-box'>
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
                <div style={{marginRight: '16px'}}>
                    <Dropdown menu={{items}} placement="bottomRight" arrow>
                        <div>超级管理员</div>
                    </Dropdown>
                </div>
            </div>
        </Layout.Header>
    )
}
export default Header;