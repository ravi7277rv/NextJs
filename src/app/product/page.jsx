import React from 'react';
import Link from 'next/link';

const Product = () => {
  const productId = 100;
  return (
    <div>
        <h3>This is the product page</h3>
        <ol>
            <li><Link href="/product/1">Product 1</Link></li>
            <li><Link href="/product/2">Product 2</Link></li>
            <li><Link href="/product/3">Product 3</Link></li>
            <li><Link href={`/product/${productId}`}>Product {productId}</Link></li>
        </ol>
    </div>
  )
}

export default Product