import Logo from '@/components/Logo/Logo'
import React from 'react'

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <Logo />
      <h1 className='text-3xl my-2'>Welcome to my Dashboard</h1>
      <h2 className='text-2xl mb-3'>Dashboard Companies</h2>
      {children}
    </div>
  )
}

export default LayoutAuth
