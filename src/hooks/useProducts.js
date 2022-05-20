import { useContext } from 'react'
import { ProductsContext } from '../providers/ProductsProvider'

export const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)
  if (!products) {
    throw new Error('Must be inside provider')
  }
  const getProductBySlug = (id) => {
    return products.find((prod) => prod.id == id)
  }

  return {
    products,
    getProductBySlug,
  }
}
