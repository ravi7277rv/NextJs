import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <h2>NAVBAR</h2>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar