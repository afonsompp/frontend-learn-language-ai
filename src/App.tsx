import { Auth0Provider } from '@auth0/auth0-react'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/organisms/theme'
import { router } from '@/main/routes'

const oauth_client_id = import.meta.env.VITE_AUTH0_CLIENT_ID || ''
const oauth_domain = import.meta.env.VITE_AUTH0_DOMAIN || ''
const oauth_audience = import.meta.env.VITE_AUTH0_AUDIENCE || ''

function App() {
  return (
    <Auth0Provider
      domain={oauth_domain}
      clientId={oauth_client_id}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: oauth_audience,
      }}
    >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Auth0Provider>
  )
}

export default App
