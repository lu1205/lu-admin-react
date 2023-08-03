// 使用RTK构建store
import { createSlice } from '@reduxjs/toolkit'
// 使用createSlice 创建reducer的切片
const tokenSlice = createSlice({
    name: 'token',
    // state 的初始值
    initialState: {
        token: ''
    },
    reducers: {
        // 参数：state，为代理对象，可以直接修改
        setToken(state, action) {
            state.token = action.payload
        },
        removeToken(state: any) {
            state.token = ''
        }
    }
})
// 切片对象会自动生成 action
export const { setToken, removeToken } = tokenSlice.actions
export const { reducer: tokenReducer } = tokenSlice
