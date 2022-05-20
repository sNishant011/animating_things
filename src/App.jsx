import './styles/App.scss'
import ProductCard from './components/ProductCard'
import { useProducts } from './hooks/useProducts'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
function App() {
  const { products } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProduct, setFilteredProducts] = useState(products)
  const categories = ['All', `Shoes`, 'Clothes']

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(
        products.filter(
          (product) => product.category === selectedCategory.toLowerCase()
        )
      )
    }
  }, [selectedCategory])
  return (
    <motion.div className='app'>
      <div className='app_header'>
        {categories.map((category, index) => (
          <button
            className={selectedCategory === category ? 'active' : ''}
            key={index}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        layoutId='products'
        className='products_container'
      >
        {filteredProduct.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image_url={product.image_url}
              id={product.id}
            />
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default App
