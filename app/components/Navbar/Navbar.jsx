'use client'

import Link from 'next/link'
import React from 'react'

import {  signOut } from 'next-auth/react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex justify-between bg-red-600 text-white font-semibold items-center p-2'>
        <div className=''>
          <li>
            {' '}
            <Link href='/'>NextAuth-Adapter</Link>{' '}
          </li>
        </div>

        <div className='flex gap-3'>
          <li>
            {' '}
            <Link href='/login'>Login</Link>{' '}
          </li>

          <li>
            {' '}
            <Link href='/register'>register</Link>{' '}
          </li>

          <button
            onClick={ signOut}
            className='bg-white text-red-500 px-1 rounded'
          >
         
            logout
          </button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
