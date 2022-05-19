import { createContext, useState } from 'react'
import { productsData } from '../data/products'

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData)
  const context = {
    products,
    setProducts,
  }
  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  )
}
export default ProductsProvider
