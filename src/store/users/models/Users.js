import { types, flow } from 'mobx-state-tree'
import User from './User'
import makeRequest from '../../../services/Api'

const Users = types
  .model('users', {
    loading: false,
    userList: types.array(User)
  })
  .actions((self) => ({
    addUser(user) {
      self.userList.push(user)
    },
    load: flow(function*() {
      self.loading = true
      try {
        self.userList = yield makeRequest({ endpoint: 'users', method: 'GET' })
        self.loading = false
      }
      catch {
        console.error('Failed request')
      }
    })
  }))

export default Users
