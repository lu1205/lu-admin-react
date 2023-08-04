import { mountStoreDevtool } from 'simple-zustand-devtools'

export const storeDevtool = (name: string, store: any) => {
    if (process.env.NODE_ENV === 'development') {
        mountStoreDevtool(name, store)
    }
}
