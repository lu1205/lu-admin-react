import {Layout, Menu} from 'antd';
import {useNavigate} from "react-router-dom";

const Slide = (props: any) => {
    const {items, collapsed, setCollapsed} = props
    const navigator = useNavigate()

    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed} breakpoint="lg" collapsedWidth="0"
                      onBreakpoint={(broken) => setCollapsed(broken)}>
            <div className="demo-logo-vertical"/>
            <Menu
                theme="dark"
                mode="inline"
                items={items}
                onClick={({key}) => navigator(key)}
            />
        </Layout.Sider>
    )
}
export default Slide;