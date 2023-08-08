import { useState } from 'react'

import { Layout } from 'antd'

import Slide from './slide'
import Header from './header'
import Content from './content'
import Footer from './footer'
import useMenuStore from '@/store/zustand/menu'

const handleIcon = (name: string) => <i className={`iconfont ${name} w-[16px] h-[16px]`}></i>

const Layouts = () => {
    // zustand 读取的数据为只读的，修改时需要重新拷贝数据
    const items = useMenuStore((state: any) => state.menuList).map((item: any) => {
        const icon = handleIcon(item.icon)
        return { ...item, icon }
    })
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Layout className="w-[100%] h-[100%]">
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
