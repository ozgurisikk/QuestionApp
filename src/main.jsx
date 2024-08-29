import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainProvider } from './components/context/MainContext.jsx'

createRoot(document.getElementById('root')).render(
    <MainProvider>
        <App />
    </MainProvider>
)
