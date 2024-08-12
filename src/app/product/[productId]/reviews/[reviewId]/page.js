import React from 'react'
import { notFound } from 'next/navigation'

const ReviewDetails = ({params}) => {
    debugger
    if(parseInt(params.reviewId) > 1000){
        debugger
        notFound();
    }
  return (
    <div>Review {params.reviewId}  for product {params.productId} </div>
  )
}

export default ReviewDetails