import './App.css'
import data from './components/data'

function App() {

  return (
    <>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Phone</th>
        </thead>
        <tbody>
          {
            data.map((user) => (
              <>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.phone}</td>
                </tr>
              </>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
