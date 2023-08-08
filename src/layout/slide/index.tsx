import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import icon from '@/assets/defaultImg/lu.png'
import { useEffect, useState } from 'react'

const Slide = (props: any) => {
    const { items, collapsed, setCollapsed } = props
    const navigator = useNavigate()
    const clickMenu = (val: any) => {
        const { key } = val
        navigator(key)
    }
    const location = useLocation()
    const [selectedPath, setSelectedPath] = useState(location.pathname)
    useEffect(() => {
        setSelectedPath(location.pathname)
    }, [location.pathname])

    return (
        <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => setCollapsed(broken)}
        >
            <div className="w-[100%] flex justify-center items-center py-[16px]">
                <img src={icon} className="w-[60px] h-[60px]" alt="" />
            </div>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[selectedPath]}
                items={items}
                onClick={(item) => clickMenu(item)}
            />
        </Layout.Sider>
    )
}
export default Slide
