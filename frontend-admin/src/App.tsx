// frontend-admin/src/App.tsx
import { Refine } from '@refinedev/core'
import { BrowserRouter, Route, Routes } from 'react-router'
import routerProvider from '@refinedev/react-router'
import { Container } from 'react-bootstrap'
import { UserList } from './pages/users/list'

function App() {
  return (
    <BrowserRouter>
      <Refine
        routerProvider={routerProvider}
        resources={[
          {
            name: 'dashboard',
            list: '/',
          },
          {
            name: 'users',
            list: '/users',
          },
        ]}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Refine>
    </BrowserRouter>
  )
}

function Dashboard() {
  return (
    <Container className="mt-4">
      <h1>管理画面ダッシュボード</h1>
      <p>Refine 4 + React Bootstrap の基本セットアップが完了しました。</p>
    </Container>
  )
}

export default App
