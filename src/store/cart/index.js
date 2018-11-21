import { types } from 'mobx-state-tree'
import User from '../users/models/User'

const Users = types
  .model('users', {
    items: types.array(types.reference(User))
  })
  .actions((self) => ({
    onAddToCart(user) {
      self.items.push(user.uid)
    },
    onRemoveFromCart(user) {
      self.items.splice(self.items.indexOf(user), 1)
    }
  }))

export default Users
