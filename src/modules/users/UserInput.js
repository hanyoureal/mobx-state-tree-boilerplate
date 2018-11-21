import React from 'react'
import { observer } from 'mobx-react'

function UserInput(props) {
  const {
    user,
    user: {
      name,
      bigName,
      onChangeName,
    },
    cart: {
      onAddToCart,
    },
  } = props

  return (
    <div style={{ margin: '10px 10px 0 0', float: 'left' }}>
      <div>{bigName}</div>
      <input style={{ fontSize: '20px' }} value={name} onChange={onChangeName} />
      <span style={{ marginLeft: '10px' }}>
        <button onClick={() => onAddToCart(user)}>Add to cart</button>
      </span>
    </div>
  )
}

export default observer(UserInput)
