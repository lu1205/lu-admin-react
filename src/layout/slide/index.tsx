import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const Slide = (props: any) => {
    const { items, collapsed, setCollapsed } = props
    const navigator = useNavigate()
    const clickMenu = (val: any) => {
        const { key, keyPath } = val
        console.log(key, keyPath)
        navigator(key)
    }

    return (
        <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => setCollapsed(broken)}
        >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" items={items} onClick={(item) => clickMenu(item)} />
        </Layout.Sider>
    )
}
export default Slide
