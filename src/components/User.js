import React, { useState } from 'react'

function User(props) {

    const[count,setCount]=useState(0);
    const[count2]=useState(1);
  return (
    <div className='user-card'>
        <h2>{props.name}</h2>
        <h3>count={count}</h3>
         <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
        <h3>count2={count2}</h3>
    </div>
  )
}

export default User