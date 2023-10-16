import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

Test.propTypes = {}

function Test(props) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9090/thumbnail')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <div>hdasdhjausob</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.title} - {user.thumbnailUrl}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Test
