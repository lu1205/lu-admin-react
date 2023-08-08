import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { storeDevtool } from '@/hooks/zustandStoreView.ts'

const useMenuStore = create(
    persist(
        immer((set) => ({
            menuList: [],
            setMenuList: (data: any) =>
                set((state: any) => {
                    state.menuList = data
                }),
            removeMenuList: () =>
                set((state: any) => {
                    state.menuList = []
                })
        })),
        {
            name: 'menuList',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)
storeDevtool('useMenuStore', useMenuStore)
export default useMenuStore
