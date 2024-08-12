import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
        <h5>Inner Layout</h5>
        {children}
    </div>
  )
}

export default AuthLayout