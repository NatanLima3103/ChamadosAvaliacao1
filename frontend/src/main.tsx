import React from "react";  
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
function App() {createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    </BrowserRouter>
  </React.StrictMode>
)};


export default App;