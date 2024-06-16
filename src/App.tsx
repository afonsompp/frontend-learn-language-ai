import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/organisms/theme'
import { router } from '@/main/routes'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
