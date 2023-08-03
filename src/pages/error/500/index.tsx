import { Empty } from 'antd'
import Error500 from '@/assets/svg/500.svg'

const Error = () => {
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
            <Empty image={Error500} description="页面报错了" />
        </div>
    )
}
export default Error
