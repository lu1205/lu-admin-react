import { Layout, Button, theme, Dropdown, Breadcrumb, Modal } from 'antd'
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
import { findRoute } from '@/utils/routeUtil'
import { useEffect, useState } from 'react'

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
        Modal.confirm({
            title: '提示',
            content: <div>确定要退出吗？</div>,
            okText: '确定',
            cancelText: '取消',
            onOk: async () => {
                const res: any = await logoutAPI()
                if (res?.status === 0) {
                    // dispatch(removeToken())
                    // dispatch(removeUser())

                    // zustand
                    removeToken()
                    navigate('/login')
                }
            },
            onCancel: () => {
                console.log('Cancel')
            }
        })
    }

    const items = [
        {
            key: '1',
            label: <div onClick={exit}>退出登录</div>
        }
    ]

    const location = useLocation()
    const [breadcrumbItems, setBreadcrumbItems] = useState([])
    useEffect(() => {
        const breadcrumbItems2 = findRoute(location.pathname)
            .map((item) => {
                return {
                    key: item.key,
                    title: <Link to={item.redirect ? item.redirect : item.key}>{item.label}</Link>
                }
            })
            .reverse()
            .filter((item) => item.key !== '/')
        setBreadcrumbItems([
            {
                key: '/',
                title: <Link to="/">首页</Link>
            },
            ...breadcrumbItems2
        ] as any)
    }, [location.pathname])

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
                    <div>
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                        <div>{user.name}</div>
                    </Dropdown>
                </div>
            </div>
        </Layout.Header>
    )
}
export default Header
