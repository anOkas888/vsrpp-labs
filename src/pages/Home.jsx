import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'

import Form from '../Components/Form'
import Table from '../Components/Table'

const Home = () => {
  const isAllowed = useSelector(state => state.allowed)

  return !isAllowed
    ? (
        <Navigate replace to='signIn' />
      )
    : (
        <div>
          <div>
            <Form />
          </div>
          <hr style={{ width: '75%', marginLeft: '17%', float: 'center' }} />
          <div>
            <Table />
          </div>
        </div>
      )
}

export default Home
