"use client"
import React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
const ProductDetails = ({params}) => {
  const router = useRouter();
  const handleMoveBack = () => {
    router.back();
  };
  const handleMoveToHome =() => {
    router.push("/");
  };
  const handleReplace = () => {
    router.replace("/")
  }
  return (
    <div>
      <h3>This is the product details of product {params.productId}</h3>
      <Button sx={{  marginRight:"10px" }} onClick={handleMoveToHome} variant='outlined'>Back To Home</Button>
      <Button onClick={handleMoveBack} variant='contained'>Move Back</Button>
      <Button color='success' variant='contained' onClick={handleReplace}>Replace</Button>
    </div>
  )
} 

export default ProductDetails