
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SongsContext from './context/SongsContext.tsx'

createRoot(document.getElementById('root')!).render(
    <SongsContext>
        <App />
    </SongsContext>

)
