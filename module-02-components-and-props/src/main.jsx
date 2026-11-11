import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Button from './Button' // default import 
import { Button1, Button2 } from './Button' //named import 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Button/>  */}
    <Button1 />
    <Button2 />
  </StrictMode>,
)
