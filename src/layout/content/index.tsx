import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'

const Content = () => {
    const {
        token: { colorBgContainer }
    } = theme.useToken()
    return (
        <Layout.Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer
            }}
        >
            <Outlet />
        </Layout.Content>
    )
}
export default Content
