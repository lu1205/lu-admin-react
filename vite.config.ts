import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/

export default ({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    console.log(command, mode, env)
    return {
        plugins: [react()],
        server: {
            port: env.VITE_PORT,
            host: env.VITE_HOST,
            open: env.VITE_OPEN,
            hmr: {
                overlay: true
            },
        },
        resolve: {
            // set alias
            alias: {
                alias: {
                    '@': fileURLToPath(new URL('./src', import.meta.url))
                }
            }
        }
    }
}
