import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import UserInput from './UserInput'

class UserList extends Component {
  componentWillMount() {
    this.props.store.users.load()
  }

  render() {
    const {
      store: {
        users,
        cart,
      },
    } = this.props

    return (
      <Fragment>
        {users.userList.map((user) => (
          <UserInput
            user={user}
            cart={cart}
            key={user.uid}
          />
        ))}
      </Fragment>
    )
  }
}

export default compose(
  inject('store'),
  observer,
)(UserList)
