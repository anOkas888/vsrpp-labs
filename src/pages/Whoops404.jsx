import notFound from '../images/404.png'
import React from 'react'

const Whoops404 = () => {
  return (
    <div>
      <h1> 404: Whoops, Page not found</h1>
      <div>
        <img src={notFound} alt="404" width="200px" height="200px" />
      </div>
    </div>
  )
}

export default Whoops404
