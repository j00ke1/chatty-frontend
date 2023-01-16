const UsersModal = ({ room, usersInRoom, setShowUsersModal }) => {
  return (
    <div className="users-modal">
      <div className="users-modal-header">
        <h4>Users in {room}</h4>
        <button onClick={() => setShowUsersModal(false)}>x</button>
      </div>
      <ul>
        {usersInRoom.map(u => <li key={u}>{u}</li>)}
      </ul>
    </div>
  )
}

export default UsersModal