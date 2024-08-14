"use client"
import React from 'react'
import { notFound } from 'next/navigation'

const ReviewDetails = ({params}) => {
  const getRandomInt = (count) => {
    let n =  Math.floor(Math.random() * count)
    return n;
  }
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    const random = getRandomInt(2)
    // if(random === 1 ){
    //   throw new Error("Review Id Error"); // this is used with the errorBoundry() for showing the error handlilng to the Review Id
    // }
  return (
    <div>Review {params.reviewId}  for product {params.productId} </div>
  )
}

export default ReviewDetails