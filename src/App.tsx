import { RootRoutes } from './router'
import { Suspense } from 'react'
import Loading from '@/components/loading'
import AuthRouter from '@/router/authRouter'

function App() {
    const elements = RootRoutes()
    return (
        <>
            <Suspense fallback={<Loading />}>
                <AuthRouter>{elements}</AuthRouter>
            </Suspense>
        </>
    )
}

export default App
