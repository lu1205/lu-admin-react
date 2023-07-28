import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {immer} from "zustand/middleware/immer";
import useUserStore from "@/store/user";

const useTokenStore = create(
    persist(
        immer(
            (set) => ({
                token: '',
                setToken: (data: any) => set((state: any) => {
                    state.token = data
                }),
                removeToken: () => set((state: any) => {
                    console.log((useUserStore as any).getState().user)
                    const removeUser = (useUserStore as any).getState().removeUser
                    state.token = ''
                    removeUser()
                }),
            })
        ),
        {
            name: 'token',
            storage: createJSONStorage(() => sessionStorage),
        },
    )
)

export default useTokenStore