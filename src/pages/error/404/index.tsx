import { Empty } from 'antd'
import Error404 from '@/assets/svg/404.svg'

const Error = () => {
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
            <Empty image={Error404} description="页面未找到" />
        </div>
    )
}
export default Error
