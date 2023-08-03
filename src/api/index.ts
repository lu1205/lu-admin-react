import { httpRequest } from '@/axios/request.ts'
import useSWR from 'swr'

export const login = (data: any) => {
    return httpRequest.request({
        url: '/api/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data
    })
}

export const Login2 = (data: any) => {
    const res = useSWR('/api/login', (url) =>
        httpRequest.request({
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data
        })
    )
    return { data: res.data, isValidating: res.isValidating }
}

export function logout() {
    return httpRequest.request({
        url: '/my/logout',
        method: 'GET'
    })
}
