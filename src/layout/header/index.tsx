import { Layout, Button, theme, Dropdown, Breadcrumb } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout as logoutAPI } from '@/api'
// import { useDispatch, useSelector } from 'react-redux'
// import { removeToken } from '@/store/redux/token'
// import { removeUser } from '@/store/redux/user'

// zustand
import useTokenStore from '@/store/zustand/token.ts'
import useUserStore from '@/store/zustand/user'
import { shallow } from 'zustand/shallow'

const Header = (props: any) => {
    const { collapsed, setCollapsed } = props
    const {
        token: { colorBgContainer }
    } = theme.useToken()
    const navigate = useNavigate()

    // const dispatch = useDispatch()
    // const user = useSelector((state: any) => state.userToken)

    // zustand
    const removeToken = useTokenStore((state: any) => state.removeToken, shallow)
    const user = useUserStore((state: any) => state.user, shallow)

    const exit = async () => {
        const res: any = await logoutAPI()
        if (res?.status === 0) {
            // dispatch(removeToken())
            // dispatch(removeUser())

            // zustand
            removeToken()
            navigate('/login')
        }
    }

    const items = [
        {
            key: '1',
            label: <div onClick={exit}>退出登录</div>
        }
    ]
    const breadcrumbNameMap: Record<string, string> = {
        '/apps': 'Application List',
        '/apps/1': 'Application1',
        '/apps/2': 'Application2',
        '/apps/1/detail': 'Detail',
        '/apps/2/detail': 'Detail'
    }
    const location = useLocation()
    const pathSnippets = location.pathname.split('/').filter((i) => i)

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        return {
            key: url,
            title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
        }
    })

    const breadcrumbItems = [
        {
            title: <Link to="/">Home</Link>,
            key: 'home'
        }
    ].concat(extraBreadcrumbItems)

    return (
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="flex justify-between items-center">
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
                <div className="flex-1 flex justify-between items-center mr-[16px]">
                    <Breadcrumb items={breadcrumbItems} />
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                        <div>{user.name}</div>
                    </Dropdown>
                </div>
            </div>
        </Layout.Header>
    )
}
export default Header
