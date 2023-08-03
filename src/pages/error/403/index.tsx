import { Empty } from 'antd'
import Error403 from '@/assets/svg/403.svg'
import { useLocation, useMatch } from 'react-router-dom'

const Error = () => {
    const currentPathName = useLocation().pathname
    console.log(currentPathName)
    const match = useMatch(currentPathName)
    console.log(match)
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
            <Empty image={Error403} description="页面禁止访问" />
        </div>
    )
}
export default Error
