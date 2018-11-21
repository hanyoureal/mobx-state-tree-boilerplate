import React from 'react'
import UserList from './users/UserList'
import UsersHeader from './users/UsersHeader'
import CartView from './cart/CartView'

export default function MainContainer() {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.userHeader, ...styles.baseContainer }}>
        <UsersHeader />
      </div>
      <div style={{ ...styles.userList, ...styles.baseContainer }}>
        <UserList />
      </div>
      <div style={{ ...styles.cartView, ...styles.baseContainer }}>
        <CartView />
      </div>
    </div>
  )
}

const styles = {
  baseContainer:  { width: '100%', float: 'left', padding: '10px' },
  container:      { width: '800px', margin: 'auto', fontSize: '20px' },
  userHeader:     { backgroundColor: '#faa' },
  userList:       { backgroundColor: '#afa' },
  cartView:       { backgroundColor: '#aaf' },
}
