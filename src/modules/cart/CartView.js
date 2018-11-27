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
        {cart.items.map((cartEntry) => (
          <div style={{ width: '300px' }} key={cartEntry.id}>
            <span>
              {cartEntry.object.bigName}
            </span>
            <button style={{ float: 'right' }} onClick={() => cart.onRemoveFromCart(cartEntry)}>X</button>
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
