import { types } from 'mobx-state-tree'
import User from '../users/models/User'

let ID = 1;

const CartItem = types.model('cartItem', {
  id: types.identifier,
  quantity: types.number,
  object: types.reference(User),
})

const Cart = types
  .model('cart', {
    items: types.array(CartItem)
  })
  .actions((self) => ({
    onAddToCart(user) {
      self.items.push({
        id: String(ID++),
        quantity: 0,
        object: user.id
      })
    },
    onRemoveFromCart(cartItem) {
      self.items.splice(self.items.indexOf(cartItem), 1)
    }
  }))

export default Cart
