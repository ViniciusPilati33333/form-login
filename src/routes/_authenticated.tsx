import { auth } from '../utils/firebase'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  component: Dashboard,

  beforeLoad: async() => {
     await auth.authStateReady();

    if(auth.currentUser == null) {
      throw redirect({to: '/'})
    }
  },
})

function Dashboard() {
  return <Outlet />
}


