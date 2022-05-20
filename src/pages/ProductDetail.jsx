import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import '../styles/ProductDetail.scss'
import { motion } from 'framer-motion'

const ProductDetail = () => {
  const { id } = useParams()
  const { getProductBySlug } = useProducts()
  const product = getProductBySlug(id)
  const navigate = useNavigate()

  return (
    <>
      <motion.span
        className='back_button'
        initial={{ opacity: 0 }}
        transition={{ delay: 0.6 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate(-1)}
      >
        &#8592;Back
      </motion.span>
      <motion.div layout className='product_detail_container' layoutId={id}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.5 }}
          src={product.image_url}
          layoutId={'detail_image' + id}
          alt={product.title}
        />
        <motion.div
          className='info_container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          layoutid={'info_container' + id}
        >
          <motion.h1 layoutId={'title' + id}>{product.title}</motion.h1>
          <motion.h2 layoutId={'price' + id}>Rs. {product.price}</motion.h2>
          <motion.p layoutId={'description' + id}>
            {product.description}
          </motion.p>
          <motion.button
            className='btn add_to_cart'
            layoutId={'add_to_cart_btn' + id}
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  )
}

export default ProductDetail
