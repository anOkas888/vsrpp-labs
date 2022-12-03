import React from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeAllowed } from '../redux/actions/rest'

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const accounts = useSelector((state) => state.accounts)

  const isLogIn = ({ email, password }) => {
    return accounts.some(
      (item) => item.email === email && item.password === password
    )
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const { email, password } = event.target

    if (
      isLogIn({ email: email.value.trim(), password: password.value.trim() })
    ) {
      dispatch(changeAllowed())
      navigate('/')
    } else {
      alert('Sorry, try again')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Welcome</h1>
        <p>Sign-in to get started</p>
        <div>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              name='password'
              required
            />
          </div>
        </div>
        <div>
          <input
            type='submit'
            value='Sign-in'
          />
        </div>
      </form>
      <div>
        <h4>
          First time here?
          <NavLink to='../signUp'> Just sign-up</NavLink>
        </h4>
      </div>
    </div>
  )
}

export default SignIn
