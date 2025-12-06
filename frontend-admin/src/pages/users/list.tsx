// frontend-admin/src/pages/users/list.tsx
import { Container, Table } from 'react-bootstrap'

export function UserList() {
  // とりあえずダミーデータ
  const users = [
    { id: 1, name: '山田太郎', email: 'yamada@example.com' },
    { id: 2, name: '佐藤花子', email: 'sato@example.com' },
    { id: 3, name: '鈴木一郎', email: 'suzuki@example.com' },
  ]

  return (
    <Container className="mt-4">
      <h1>ユーザー一覧</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>メールアドレス</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
