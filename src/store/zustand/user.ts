import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const useUserStore = create(
    persist(
        immer((set) => ({
            user: {
                name: '',
                email: '',
                username: 'admin',
                password: '111111',
                remember: true
            },
            setUser: (data: any) =>
                set((state: any) => {
                    state.user = data
                }),
            removeUser: () =>
                set((state: any) => {
                    state.user = {
                        name: '',
                        email: '',
                        username: 'admin',
                        password: '111111',
                        remember: true
                    }
                    if (!state.user.remember) {
                        state.user.username = ''
                        state.user.password = ''
                        state.user.remember = false
                    }
                })
        })),
        {
            name: 'user',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useUserStore
