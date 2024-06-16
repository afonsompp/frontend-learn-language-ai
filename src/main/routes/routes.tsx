import { RouteObject } from 'react-router-dom'

import { RootWithAppBar } from '@/components/templates/root'
import HomePage from '@/presentation/pages/home'
import PlaygroundPage from '@/presentation/pages/playground'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootWithAppBar />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'playground',
        element: <PlaygroundPage />,
      },
    ],
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]
