import { types } from 'mobx-state-tree'
import User from './models/User'

const Users = types
  .model('users', {
    userList: types.array(User)
  })
  .actions((self) => ({
    addUser(user) {
      self.userList.push(user)
    },
    load() {
      const NAMES = ['Marius', 'Florin', 'Strudel', 'Saiba']
      const ROW_COUNT = 10
      let uid = 1;

      while (uid <= ROW_COUNT) {
        const user = { name: NAMES[uid % NAMES.length], uid: `usr${uid}` }
        self.addUser(user)
        uid++
      }
    }
  }))

export default Users
