const UserList = ({ users, onToggleActive, onDeleteUser }) => {
  return (
    <div>
      <div>
        {users.length > 0 ? (
          users.map((item) => (
            <div>
              {item.name} <br></br>
              {item.email} <br></br>
              {item.role} <br></br>
              {item.active === true ? "Active" : "Inactive"} <br></br>
              <button onClick={() => onToggleActive(item.id)}>
                {item.active === true ? "Inactive" : "Active"}
              </button>
              <button onClick={() => onDeleteUser(item.id)}>Delete</button>
            </div>
          ))
        ) : (
          <div>No One matches Search or Filter</div>
        )}
      </div>
    </div>
  );
};

export default UserList;
