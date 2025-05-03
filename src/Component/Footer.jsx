'use client';
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    const path = usePathname()
  return (
    <footer className={`mt-6 py-5 backdrop-blur-md bg-white/20 w-full ${path == '/Workshop' ? 'hidden' : ''}`}>
      <h2 className='ff-Bree text-center text-2xl'>@{year}</h2>
    </footer>
  )
}

export default Footer
