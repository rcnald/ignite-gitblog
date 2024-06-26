import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { Details } from './pages/details'
import { Posts } from './pages/posts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Posts />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}
