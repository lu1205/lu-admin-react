// 使用RTK构建store
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tokenReducer } from '@/store/redux/token'
import { userReducer } from '@/store/redux/user'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reduxThunk from 'redux-thunk'
import * as process from 'process'

const persistConfig = {
    key: 'persist',
    storage: storage
}

const reducers = combineReducers({
    tokenStore: tokenReducer,
    userToken: userReducer
})
const persistReducers = persistReducer(persistConfig, reducers)

// 创建 store
const store = configureStore({
    reducer: persistReducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxThunk)
    // middleware: [reduxThunk]
})
const persistor = persistStore(store)
export { persistor, store }
