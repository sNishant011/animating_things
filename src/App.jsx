import './styles/App.scss'
import ProductCard from './components/ProductCard'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products } = useProducts()
  return (
    <div className='app'>
      <div className='products_container'>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            price={product.price}
            image_url={product.image_url}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  )
}

export default App
