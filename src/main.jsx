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
      <AnimateSharedLayout type='crossfade'>
        <BrowserRouter>
          <Routes>
            <Route element={<App />} path={'/'} />
            <Route element={<ProductDetail />} path={'/products/:slug'} />
          </Routes>
        </BrowserRouter>
      </AnimateSharedLayout>
    </ProductsProvider>
  </React.StrictMode>
)
