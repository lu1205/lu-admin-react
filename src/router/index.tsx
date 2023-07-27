import {useRoutes} from "react-router-dom";
import {lazy, Suspense} from 'react'
import Loading from "../components/loading";
const lazyComponent = (Component)=>(
    // <Suspense fallback={<Loading/>}>
        <Component/>
    // </Suspense>
)

const Login = lazy(() => import('../pages/login'))
const Layout = lazy(() => import('../layout'))
const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))
const Error = lazy(() => import('../pages/error'))

const routes = [
    {
        path: 'login',
        name: '登录',
        element: lazyComponent(Login),
    },
    {
        path: '/',
        name: '首页',
        key: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                path: '/',
                name: '首页',
                key: '/',
                element: lazyComponent(Home),
            },
            {
                index: false,
                path: 'about',
                name: '关于',
                key: '/about',
                element: lazyComponent(About),
            },
            {
                index: false,
                path: 'error',
                name: 'Error',
                key: '/error',
                element: lazyComponent(Error),
            },
        ]
    }
]

const Routes = () => {
    return useRoutes(routes)
}
export {Routes}