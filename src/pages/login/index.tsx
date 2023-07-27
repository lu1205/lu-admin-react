import React, {useState} from "react";
import {Form, Input, Button, message, Checkbox} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import './index.scss'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const onFinish = async (values: any) => {
        setLoading(true);
        setError("");

        try {
            // Your authentication logic goes here
            const {username,password,remember} = values
            if(username !== 'admin' && password !== '123456') {
                return message.info({
                    type: 'error',
                    content: '账号或密码错误！',
                });
            }
            navigate('/')
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <div className="form-box">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true,username: 'admin',password: '123456' }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
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
    );
};

export default Login;
