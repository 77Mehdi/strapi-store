import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { stoore ,persistor} from './redux/Stoore.js'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={stoore}>
        <PersistGate loading={"loadind2..."}  persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>,
)
