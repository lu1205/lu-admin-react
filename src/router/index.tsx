import { useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loading from '@/components/loading'

const lazyComponent = (Component: any) => (
    <Suspense fallback={<Loading />}>
        <Component />
    </Suspense>
)

const Login = lazy(() => import('@/pages/login'))
const Layout = lazy(() => import('@/layout'))
const Home = lazy(() => import('@/pages/home'))
const About = lazy(() => import('@/pages/about'))
const Error403 = lazy(() => import('@/pages/error/403'))
const Error404 = lazy(() => import('@/pages/error/404'))
const Error500 = lazy(() => import('@/pages/error/500'))

const routes: any[] = [
    {
        path: 'login',
        name: '登录',
        element: lazyComponent(Login)
    },
    {
        path: '/',
        name: '首页',
        key: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                path: '/',
                name: '首页',
                key: '/',
                element: lazyComponent(Home)
            },
            {
                index: false,
                path: 'about',
                name: '关于',
                key: '/about',
                element: lazyComponent(About)
            },
            {
                index: false,
                path: 'error',
                name: 'Error',
                key: '/error',
                children: [
                    {
                        index: false,
                        path: '403',
                        name: '403',
                        key: '/error/403',
                        element: lazyComponent(Error403)
                    },
                    {
                        index: false,
                        path: '404',
                        name: '404',
                        key: '/error/404',
                        element: lazyComponent(Error404)
                    },
                    {
                        index: false,
                        path: '500',
                        name: '500',
                        key: '/error/500',
                        element: lazyComponent(Error500)
                    }
                ]
            }
        ]
    }
]

const RootRoutes = () => {
    return useRoutes(routes)
}
export { RootRoutes }
