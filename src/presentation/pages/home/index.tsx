import { useAuth0 } from '@auth0/auth0-react'

export default function HomePage() {
  const { user } = useAuth0()

  return (
    <div className={'px-8'}>
      <h1>Home Page</h1>

      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  )
}
