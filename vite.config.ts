import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import path from 'path'

// https://vitejs.dev/config/

export default ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    console.log(command, mode)
    return {
        plugins: [react()],
        server: {
            port: env.VITE_PORT,
            host: env.VITE_HOST,
            open: env.VITE_OPEN,
            hmr: {
                overlay: true
            }
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        build: {
            // target: ['es2015', 'modules'],
            outDir: 'dist', // 指定输出路径
            assetsDir: 'static', // 指定生成静态文件目录
            assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码
            cssCodeSplit: true, // 启用 CSS 代码拆分
            emptyOutDir: true, //打包前先清空原有打包文件
            // 在这里配置打包时的rollup配置
            rollupOptions: {
                output: {
                    //静态资源分类打包
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                    assetFileNames: (chunkInfo: any) => {
                        const extFileDirMap: Record<string, string> = {
                            'png,gif,jpg,jpeg,svg': '/img'
                        }
                        const ext = chunkInfo?.name.match(/\.(\w+)$/)?.[1] || 'js'
                        const dir =
                            Object.keys(extFileDirMap)
                                .filter((key) => key.split(',').includes(ext))
                                .map((key) => extFileDirMap[key])?.[0] || '[ext]'
                        return `static/${dir}/[name].[hash].[ext]`
                    },
                    manualChunks(id) {
                        //静态资源分拆打包
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString()
                        }
                    }
                }
            }
        },
        optimizeDeps: {
            include: []
        }
    }
}
