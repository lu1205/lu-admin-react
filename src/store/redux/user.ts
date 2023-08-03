// 使用RTK构建store
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// 使用createSlice 创建reducer的切片
export const userSlice = createSlice({
    name: 'user',
    // state 的初始值
    initialState: {
        name: '',
        email: '',
        username: 'admin',
        password: '111111',
        remember: true
    },
    reducers: {
        // 参数：state，为代理对象，可以直接修改
        setUser: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                ...action.payload
            }
        },
        removeUser() {
            return {
                name: '',
                email: '',
                username: 'admin',
                password: '111111',
                remember: true
            }
        },
        getUser: (state) => {
            return state
        }
    }
})
// 切片对象会自动生成 action
export const { setUser, removeUser, getUser } = userSlice.actions
export const { reducer: userReducer } = userSlice
