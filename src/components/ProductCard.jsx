import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ProductCard = ({ title, description, price, slug, image_url }) => {
  return (
    <motion.div className='product_card' layoutId={'card_layout' + slug}>
      <motion.img
        src={image_url}
        alt='title'
        layoutId={'detail_image' + slug}
      />
      <motion.div
        className='info_container'
        transition={{ duration: 0.3, delay: 0.15 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        layoutId={'info_container' + slug}
      >
        <motion.h1 className='price' layoutId={'price' + slug}>
          Rs. {price}
        </motion.h1>

        <motion.h2 className='title' layoutId={'title' + slug}>
          {title.slice(0, 28)} {title.length > 28 ? '...' : ''}
        </motion.h2>
        <motion.p className='description' layoutId={'description' + slug}>
          {description.slice(0, 100)} {description.length > 200 ? '...' : ''}
        </motion.p>
        <motion.div className='button_container'>
          <Link to={'/products/' + slug} className='btn view_details'>
            View Detail
          </Link>
          <motion.button
            layoutId={'add_to_cart_btn' + slug}
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
