'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const session = useSession()
  console.log(session)
  const router = useRouter()

  if (session?.status === 'loading') {
    return 'Loading....'
  }

  if (session?.status === 'unauthenticated') {
    return (
      <div className='text-center font-semibold mt-8 '>
        <h1>You Must Login to view this page</h1>
      </div>
    )
  }

  return (
    <div className='text-center font-semibold mt-8 '>
      <h1>Dashboard </h1>
      <p>
        Hello{' '}
        <span className='text-red-600 '>{session?.data?.user?.email}</span>
      </p>
    </div>
  )
}

export default Dashboard
