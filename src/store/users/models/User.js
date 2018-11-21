import { types } from  'mobx-state-tree'

const User = types
  .model('user', {
    uid: types.identifier,
    name: types.string,
  })
  .actions((self) => ({
    onChangeName({ target: { value } }) {
      self.name = value
    },
  }))
  .views((self) => ({
    get bigName() {
      return self.name.toUpperCase()
    }
  }))

export default User
