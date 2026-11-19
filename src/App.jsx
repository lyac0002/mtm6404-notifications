
import { useState } from 'react'
import notificationsData from './notifications'
import './App.css'

function Notification({ children, onClear }) {
  return (
    <div className="notification">
      {children}
      <button onClick={onClear}>Clear</button>
    </div>
  )
}

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  function clearNotification(id) {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  function clearAll() {
    setNotifications([])
  }

  return (
    <div className="App">
      <h1>Notifications</h1>
      <p>You have {notifications.length} notifications</p>

      <button onClick={clearAll}>Clear All</button>

      {notifications.map(notification => (
        <Notification
          key={notification.id}
          onClear={() => clearNotification(notification.id)}
        >
          <p>ID: {notification.id}</p>
          <h3>{notification.name}</h3>
          <p>{notification.message}</p>
        </Notification>
      ))}
    </div>
  )
}

export default App
