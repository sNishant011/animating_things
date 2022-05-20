import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ProductCard = ({ title, description, price, id, image_url }) => {
  return (
    <motion.div layout layoutId={id} className='product_card'>
      <motion.img
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        src={image_url}
        alt='title'
        layoutId={'detail_image' + id}
      />
      <motion.div className='info_container' layoutId={'info_container' + id}>
        <div className='text_info'>
          <motion.h1 className='price' layoutId={'price' + id}>
            Rs. {price}
          </motion.h1>

          <motion.h2 className='title' layoutId={'title' + id}>
            {title.slice(0, 28)} {title.length > 28 ? '...' : ''}
          </motion.h2>
          <motion.p className='description' layoutId={'description' + id}>
            {description.slice(0, 100)} {description.length > 200 ? '...' : ''}
          </motion.p>
        </div>
        <motion.div className='button_container'>
          <Link to={'/products/' + id} className='btn view_details'>
            View Detail
          </Link>
          <motion.button
            layoutId={'add_to_cart_btn' + id}
            className='btn add_to_cart'
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProductCard
