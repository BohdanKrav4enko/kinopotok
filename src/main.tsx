import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './app/App.tsx'
import {GlobalStyle} from "./style/GlobalStyle.tsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistor, store} from "./app/store.ts";
import {PersistGate} from "redux-persist/integration/react";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle/>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </StrictMode>
)