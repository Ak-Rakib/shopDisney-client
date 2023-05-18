import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'

function App() {
  

  return (
    <React.Fragment>
        <RouterProvider router={router}></RouterProvider>      
    </React.Fragment>
  )
}

export default App
