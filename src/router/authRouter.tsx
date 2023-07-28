import {Navigate,useLocation} from 'react-router-dom'
import useTokenStore from "@/store/token";
import {shallow} from "zustand/shallow";

const AuthRouter = (props:any) => {
    const { pathname } = useLocation()
    const [token] = useTokenStore(
        (state: any) => [state.token],
        shallow
    )
    if (!token && pathname !== '/login') return <Navigate to="/login" />

    return props.children
}

export default AuthRouter
