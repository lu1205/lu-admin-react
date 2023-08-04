import { Layout, theme } from 'antd'
import { useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './index.scss'

// 使用react-spring
const Content = () => {
    const {
        token: { colorBgContainer }
    } = theme.useToken()

    const currentOutlet = useOutlet()

    return (
        <Layout.Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer
            }}
        >
            <SwitchTransition>
                <CSSTransition key={location.pathname} className="fade" timeout={300}>
                    {currentOutlet}
                </CSSTransition>
            </SwitchTransition>
        </Layout.Content>
    )
}
export default Content
