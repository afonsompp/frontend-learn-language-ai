import { useAuth0 } from '@auth0/auth0-react'
import { Outlet } from 'react-router-dom'

import { LoginButton } from '@/components/atoms/login-button'
import { LogoutButton } from '@/components/atoms/logout-button'
import { AppbarNavigation } from '@/components/organisms/appbar-navigation'
import { ModeToggle } from '@/components/organisms/theme/mode-toggle.tsx'

export function RootWithAppBar() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className={'w-full'}>
      <div className={'flex justify-between w-full h-full px-4 py-3'}>
        <div className={'flex'}>
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
            Learn language AI
          </h1>

          <AppbarNavigation />
        </div>

        <div className={'flex gap-5'}>
          {isAuthenticated && <LogoutButton />}
          {!isAuthenticated && <LoginButton />}

          <ModeToggle />
        </div>
      </div>

      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full mb-8"
      />

      <Outlet />
    </div>
  )
}
