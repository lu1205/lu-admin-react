import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const useUserStore = create(
    persist(
        immer((set) => ({
            user: {
                name: '',
                emails: '',
                username: 'admin',
                password: '123456',
                remember: true
            },
            /*removeUser: () => set((state) => ({
                    user: {
                        name: '',
                        emails: '',
                    }
                })),
                setUser: (data: any) => set((state: any) => ({
                    user: {
                        ...state.user,
                        ...data
                    }
                })),*/
            setUser: (data: any) =>
                set((state: any) => {
                    state.user = data
                }),
            removeUser: () =>
                set((state: any) => {
                    if (!state.user.remember) {
                        state.user.username = ''
                        state.user.password = ''
                    }
                    state.user.name = ''
                    state.user.emails = ''
                })
        })),
        {
            name: 'user',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useUserStore
