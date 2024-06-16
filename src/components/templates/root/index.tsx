import { Outlet } from 'react-router-dom'

import { AppbarNavigation } from '@/components/organisms/appbar-navigation'
import { ModeToggle } from '@/components/organisms/theme/mode-toggle.tsx'

export function RootWithAppBar() {
  return (
    <div className={'w-full'}>
      <div className={'flex justify-between w-full h-full px-4 py-3'}>
        <div className={'flex'}>
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
            Learn language AI
          </h1>

          <AppbarNavigation />
        </div>

        <ModeToggle />
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
