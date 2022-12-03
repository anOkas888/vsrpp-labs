/* eslint-disable react/no-unescaped-entities */
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
    <div className='sign'>
      <form className='sign-form' onSubmit={onSubmit}>
        <h1 >We're glad to see you</h1>
        <p>We need to figure out something about you, please keep calm</p>
        <div>
          <div className="field-row">
            <label htmlFor='name'>Name</label>
            <input
            id='name'
            type='text'
            placeholder='Name'
            required />
          </div>
          <div className="field-row">
            <label htmlFor='email'>Email</label>
            <input
            placeholder='Email'
            required />
          </div>
          <div className="field-row">
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              placeholder='Password'
              required />
          </div>
        </div>
        <div>
          <input className='btn btn-sign'
            type='submit'
            value='Sign-up'
          />
        </div>
      </form>
    </div>
  )
}

export default SignUp
