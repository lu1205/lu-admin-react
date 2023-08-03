import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/reset.scss'
import '@/styles/index.scss'
import '@/styles/tailwind.scss'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store, persistor } from '@/store/redux'
// import { PersistGate } from 'redux-persist/es/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/*        <Provider store={store}>
            <BrowserRouter>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Provider>*/}

        {/* zustand*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
