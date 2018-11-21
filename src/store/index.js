import { types } from 'mobx-state-tree'
import Users from './users'
import Cart from './cart'

const Store = types
  .model('store', {
    users: types.optional(Users, { userList: [] }),
    cart: types.optional(Cart, { items: [] }),
  })

const store = Store.create()

export default store
