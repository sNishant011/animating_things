import { useContext } from 'react'
import { ProductsContext } from '../providers/ProductsProvider'

export const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)
  if (!products) {
    throw new Error('Must be inside provider')
  }
  const getProductBySlug = (slug) => {
    return products.find((prod) => prod.slug === slug)
  }

  return {
    products,
    getProductBySlug,
  }
}
