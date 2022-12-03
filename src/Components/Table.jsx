import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser, addUser } from '../redux/actions/users'

const Table = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const onDelete = (id) => {
    dispatch(removeUser(id))
  }

  useEffect(() => {
    const getFakeMembers = (count = 5) => fetch(`https://api.randomuser.me/?nat=US&results=${count}`)
    getFakeMembers(5)
      .then(response => response.json())
      .then(response => response.results.forEach(person => dispatch(
        addUser({
          id: person.id.value,
          firstName: person.name.first,
          lastName: person.name.last,
          email: person.email
        }))))
  }, [])

  return (
    <table>
      <thead>
      <tr>
        <th width='17%'>Id</th>
        <th width='17%'>First name</th>
        <th width='17%'>Last name</th>
        <th width='17%'>Email</th>
        <th width='17%'>Action</th>
      </tr>
      </thead>
      { users.length === 0
        ? null
        : (
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>
                  <button className='btn' onClick={() => onDelete(item.id)}>
                    Delete
                  </button>
                </td>
            </tr>
            ))}
          </tbody>
          )}
    </table>
  )
}

export default Table
