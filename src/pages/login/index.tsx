import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { login } from '@/api'

// import { useDispatch, useSelector } from 'react-redux'
// import { setToken } from '@/store/redux/token'
// import { setUser } from '@/store/redux/user'

// zustand
import useTokenStore from '@/store/zustand/token'
import useUserStore from '@/store/zustand/user'
import { shallow } from 'zustand/shallow'

const Login = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const user = useSelector((state: any) => state.userToken)

    // zustand
    const setToken = useTokenStore((state: any) => state.setToken, shallow)
    const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser], shallow)

    const onFinish = async (values: any) => {
        const { username, password, remember } = values
        const res: any = await login({ username, password })
        if (res?.status === 0) {
            // dispatch(setToken(res.data.token))

            // zustand
            setToken(res.data.token)
            if (remember) {
                /*dispatch(
                    setUser({ ...res.data.userInfo, name: res.data.userInfo.nickname, ...values })
                )*/

                // zustand
                setUser({ ...res.data.userInfo, name: res.data.userInfo.nickname, ...values })
            } else {
                /*dispatch(
                    setUser({
                        ...res.data.userInfo,
                        name: res.data.userInfo.nickname,
                        username: '',
                        password: '',
                        remember
                    })
                )*/

                // zustand
                setUser({
                    ...res.data.userInfo,
                    name: res.data.userInfo.nickname,
                    username: '',
                    password: '',
                    remember
                })
            }
            navigate('/')
        }
    }

    return (
        <div className="absolute w-[300px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Form
                initialValues={{
                    remember: user.remember,
                    username: user.username,
                    password: user.password
                }}
                onFinish={onFinish}
            >
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                </Form.Item>
                <Form.Item>
                    <div>账号: admin 密码: 111111</div>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
