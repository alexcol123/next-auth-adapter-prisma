import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from './components/User/User'
import Navbar from './components/Navbar/Navbar'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <div className='max-w-[700px] mx-auto bg-gray-200 p-5 rounded my-10'>
        {/* serverside render */}
        <h1 className='text-center text-red-600 font-bold text-xl mb-8'>
          {' '}
          Server component{' '}
        </h1>
        Server <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>

      <User />
    </div>
  )
}
