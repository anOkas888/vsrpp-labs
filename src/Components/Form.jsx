import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../redux/actions/users'
import React from 'react'

const Form = () => {
  const dispatch = useDispatch()
  const newId = useSelector((state) => state.userCounter)

  const onSubmit = (event) => {
    event.preventDefault()
    const { firstName, lastName, email } = event.target

    const newUser = {
      id: newId,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    }

    dispatch(addUser(newUser))
    firstName.value = ''
    lastName.value = ''
    email.value = ''
  }

  return (
    <form
      onSubmit={onSubmit}>
      <div>
        <input type='submit' value='Add User' />
      </div>

      <div>
        <label htmlFor='firstName'>
          First name
        </label>
        <input type='text' name='firstName' required />
      </div>

      <div>
        <label htmlFor='lastName'>
          Second name
        </label>
        <input type='text' name='lastName' required />
      </div>

      <div>
        <label htmlFor='email'>
          Email
        </label>
        <input type='email' name='email' required />
      </div>
    </form>
  )
}

export default Form
