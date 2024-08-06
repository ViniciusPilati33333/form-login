import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/authenticaded/Dashboard')({
  component: () => <div>Hello /authenticaded/Dashboard!</div>
})