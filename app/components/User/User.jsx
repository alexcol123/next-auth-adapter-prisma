'use client'

import { useSession } from 'next-auth/react'

export default function User() {
  const { data: session } = useSession()

  return (
    <div className='max-w-[700px] mx-auto bg-gray-100 p-5 rounded my-4'>
   
        <h1 className='text-center text-red-600 font-bold text-xl mb-8'>Client component</h1>
        CLIENT <pre>{JSON.stringify(session, null, 2)}</pre>

    </div>
  )
}
