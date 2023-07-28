import { Layout, Button, theme, Dropdown } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import useUserStore from '@/store/user'
import { shallow } from 'zustand/shallow'
import useTokenStore from '@/store/token'

const Header = (props: any) => {
    const { collapsed, setCollapsed } = props
    const {
        token: { colorBgContainer }
    } = theme.useToken()
    const navigate = useNavigate()

    const [user] = useUserStore((state: any) => [state.user], shallow)
    const [removeToken] = useTokenStore((state: any) => [state.removeToken], shallow)

    const logout = () => {
        removeToken()
        navigate('/login')
    }

    const items = [
        {
            key: '1',
            label: <div onClick={logout}>退出登录</div>
        }
    ]

    return (
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="head-box">
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64
                    }}
                />
                <div style={{ marginRight: '16px' }}>
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                        <div>{user.name}</div>
                    </Dropdown>
                </div>
            </div>
        </Layout.Header>
    )
}
export default Header
