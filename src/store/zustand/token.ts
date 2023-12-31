import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import useUserStore from '@/store/zustand/user.ts'
import { storeDevtool } from '@/hooks/zustandStoreView.ts'

const useTokenStore = create(
    persist(
        immer((set) => ({
            token: '',
            setToken: (data: any) =>
                set((state: any) => {
                    state.token = data
                }),
            removeToken: () =>
                set((state: any) => {
                    const removeUser = (useUserStore as any).getState().removeUser
                    state.token = ''
                    removeUser()
                })
        })),
        {
            name: 'token',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)
storeDevtool('useTokenStore', useTokenStore)
export default useTokenStore
