import React from 'react'
import {
  Link,
  useHref,
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import '../styles/ProductDetail.scss'
import { AnimatePresence, motion } from 'framer-motion'

const ProductDetail = () => {
  const { slug } = useParams()
  const { getProductBySlug } = useProducts()
  const product = getProductBySlug(slug)
  const navigate = useNavigate()

  return (
    <AnimatePresence>
      <motion.div
        className='product_detail_container'
        layoutId={'card_layout' + slug}
        // initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        <motion.img
          src={product.image_url}
          layoutId={'detail_image' + slug}
          alt={product.title}
        />
        <motion.div
          className='info_container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate(-1)}
          >
            &#8592;Back
          </motion.span>
          <motion.h1 layoutId={'title' + slug}>{product.title}</motion.h1>
          <motion.h2 layoutId={'price' + slug}>Rs. {product.price}</motion.h2>
          <motion.p layoutId={'description' + slug}>
            {product.description}
          </motion.p>
          <motion.button
            className='btn add_to_cart'
            layoutId={'add_to_cart_btn' + slug}
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductDetail
