import { useNavigate } from 'react-router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAccount } from '../redux/actions/accounts'
import { changeAllowed } from '../redux/actions/rest'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const newId = useSelector((state) => state.accountCounter)

  const onSubmit = (event) => {
    event.preventDefault()
    const { name, email, password } = event.target
    const newAccount = {
      id: newId,
      name: name.value,
      password: password.value,
      email: email.value
    }

    dispatch(addAccount(newAccount))
    dispatch(changeAllowed())
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 >We`$apos`re glad to see you</h1>
        <p>Let`$apos`s know something new about you</p>

        <div>
          <div>
            <label htmlFor='name'>Name</label>
            <div>
              <input
                id='name'
                type='text'
                placeholder='Name'
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <div>
              <input
                placeholder='Email'
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <div>
              <input
                id='password'
                type='password'
                placeholder='Password'
                required
              />
            </div>
          </div>
        </div>
        <div>
          <input
            type='submit'
            value='Sign-up'
          />
        </div>
      </form>
    </div>
  )
}

export default SignUp
