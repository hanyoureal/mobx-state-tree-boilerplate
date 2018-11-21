import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'

function UserList(props) {
  const {
    store: {
      users,
    },
  } = props

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>User list:</h3>
      <div>
        {users.userList.map((user) => (user.bigName)).join(', ')}
      </div>
    </div>
  )
}

export default compose(
  inject('store'),
  observer,
)(UserList)
