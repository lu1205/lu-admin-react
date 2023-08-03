import { Navigate, useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// zustand
import useTokenStore from '@/store/zustand/token'
import { shallow } from 'zustand/shallow'

const AuthRouter = (props: any) => {
    const { pathname } = useLocation()
    // const { token } = useSelector((state: any) => state.tokenStore) as any

    // zustand
    const token = useTokenStore((state: any) => state.token, shallow)

    if (!token && pathname !== '/login') return <Navigate to="/login" />

    return props.children
}

export default AuthRouter
