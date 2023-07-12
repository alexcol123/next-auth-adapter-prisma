import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <section>
      <h1>Home</h1>
      <h1>Server Side Render</h1>
      return <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  )
}
