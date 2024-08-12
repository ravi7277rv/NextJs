"use client"
import React from 'react';
import Link from 'next/link';
import './AuthOutlayout.css'
import { usePathname } from 'next/navigation';

const AuthOutLayout = ({ children }) => {
    const pathname = usePathname();
    const navLink = [
        { name: "Register", routeLink: "/register" },
        { name: "Login", routeLink: "/login" },
        { name: "ForgotPassword", routeLink: "/forgotpassword" },
    ]
    return (
        <div>
            {
                navLink.map((nlink) => {
                    const isActive = pathname.startsWith(nlink.routeLink)
                    return (
                        <Link
                            href={`${nlink.routeLink}`}
                            key={nlink.name}
                            className={`${isActive ? "backgroundGreen" : "backgroundBlack"}`}
                        >
                            {nlink.name}
                        </Link>
                    )
                })
            }
            {children}
        </div>
    )
}

export default AuthOutLayout