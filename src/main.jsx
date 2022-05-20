import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './styles/index.scss'
import ProductDetail from './pages/ProductDetail'
import ProductsProvider from './providers/ProductsProvider'
import { AnimateSharedLayout } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path={'/'} />
          <Route element={<ProductDetail />} path={'/products/:id'} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>
)
