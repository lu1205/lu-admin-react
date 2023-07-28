import { Form, Input, Button, message, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import useUserStore from '@/store/user'
import { shallow } from 'zustand/shallow'
import useTokenStore from '@/store/token'

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser], shallow)
    const [setToken] = useTokenStore((state: any) => [state.setToken], shallow)
    const onFinish = async (values: any) => {
        const { username, password, remember } = values
        console.log(remember)
        if (username !== 'admin' && password !== '123456') {
            return message.info({
                type: 'error',
                content: '账号或密码错误！'
            })
        }
        setToken('Bears token')
        if (remember) {
            setUser({ name: '超级管理员', emails: '123456@qq.com', ...values })
        } else {
            setUser({
                name: '超级管理员',
                emails: '123456@qq.com',
                username: '',
                password: '',
                remember
            })
        }
        navigate('/')
    }

    return (
        <div className="form-box">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: user.remember,
                    username: user.username,
                    password: user.password
                }}
                onFinish={onFinish}
            >
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>
                <Form.Item>
                    <div>账号: admin 密码: 123456</div>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
