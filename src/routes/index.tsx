import { auth } from '../utils/firebase';
import { LoginPage } from '../components/LoginPage'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,

  beforeLoad: async() => {
    await auth.authStateReady();

    if(auth.currentUser) {
      throw redirect({to: '/dashboard'})
    }
  },
})

function Index() {
  return <LoginPage />
}
