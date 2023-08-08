import useMenuStore from '@/store/zustand/menu'
export const findRoute = (
    currentPath: string,
    data: any[] = (useMenuStore as any).getState().menuList
): any[] => {
    // for (const i in data) {
    //     if (data[i].key === currentPath) {
    //         return [data[i]]
    //     }
    //     if (data[i].children) {
    //         const item = findRoute(currentPath, data[i].children)
    //         if (item !== undefined) {
    //             return item.concat(data[i])
    //         }
    //     }
    // }
    let arr = []
    for (const i in data) {
        const item = data[i]
        if (item.key === currentPath) {
            return [item]
        }
        if (item.children && item.children.length > 0) {
            const item2 = findRoute(currentPath, item.children)
            if (item2 !== undefined) {
                arr = item2.concat(item)
            }
        }
    }
    return arr
}
