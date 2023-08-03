import axios from 'axios'
import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CreateAxiosDefaults,
    InternalAxiosRequestConfig
} from 'axios'
import { message } from 'antd'

// import { store } from '@/store/redux'

// zustand
import useTokenStore from '@/store/zustand/token.ts'

class Request {
    private instance: AxiosInstance
    // 存放取消请求控制器Map
    private abortControllerMap: Map<string, AbortController>

    constructor(config: CreateAxiosDefaults) {
        this.instance = axios.create(config)
        this.abortControllerMap = new Map()
        // 请求拦截器
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                if (config.url !== '/api/login' && config.url !== '/api/reguser') {
                    // config.headers['Authorization'] = store.getState().tokenStore.token

                    // zustand
                    config.headers['Authorization'] = (useTokenStore as any).getState().token
                }

                const controller = new AbortController()
                const url = config.url || ''
                config.signal = controller.signal
                this.abortControllerMap.set(url, controller)

                return config
            },
            (err) => {
                return Promise.reject(err)
            }
        )

        // 响应拦截器
        this.instance.interceptors.response.use(
            async (response: AxiosResponse) => {
                const url = response.config.url || ''
                this.abortControllerMap.delete(url)

                if (response.data.status === 0) {
                    // 接口正常返回
                    // return response.data
                    return Promise.resolve(response.data)
                } else {
                    return message.error(response.data.message)
                }
            },
            (err) => {
                // if (err.response?.status === 401) {
                //     // 登录态失效，清空userInfo，跳转登录页
                //     // window.location.href = `/login?redirect=${window.location.pathname}`
                //     window.location.href = `/login`
                // }

                return Promise.reject(err)
            }
        )
    }

    // 取消全部请求
    cancelAllRequest() {
        for (const [, controller] of this.abortControllerMap) {
            controller.abort()
        }
        this.abortControllerMap.clear()
    }

    // 取消指定的请求
    cancelRequest(url: string | string[]) {
        const urlList = Array.isArray(url) ? url : [url]
        for (const _url of urlList) {
            this.abortControllerMap.get(_url)?.abort()
            this.abortControllerMap.delete(_url)
        }
    }

    request<T>(config: AxiosRequestConfig): Promise<T> {
        return this.instance.request(config)
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, config)
    }

    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post(url, data, config)
    }
}

export const httpRequest = new Request({
    baseURL: ''
})
