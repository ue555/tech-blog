import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MaintenanceGate from "./components/MaintenanceGate";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MaintenanceGate>
      <App />
    </MaintenanceGate>
  </React.StrictMode>,
)
