import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'

function Cart(props) {
  const {
    store: {
      cart,
    },
  } = props

  return (
    <Fragment>
      {
        !!cart.items.length &&
          <h3>
            Cart members:
          </h3>
      }
      <div>
        {cart.items.map((user) => (
          <div style={{ width: '300px' }} key={user.uid}>
            <span>
              {user.bigName}
            </span>
            <button style={{ float: 'right' }} onClick={() => cart.onRemoveFromCart(user)}>X</button>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default compose(
  inject('store'),
  observer,
)(Cart)
