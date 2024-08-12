import React from 'react'

export const metadata = ({params}) =>{
  return {
    title: `Product ${params.productId}`
  }
  
}
const ProductDetails = ({params}) => {
  return (
    <div>This is the product details of product {params.productId}</div>
  )
}

export default ProductDetails