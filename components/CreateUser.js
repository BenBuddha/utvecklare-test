const CreateUser = (props) => {
  const [username, setUsername] = React.useState([]);

  // submit function, stops the default behaviour and runs the create function
  const submit = async (e) => {
    e.preventDefault();
    props.create(username);
  };
  return (
    <div className="wrapper-users">
      <h2>Create User</h2>
      <input
        id=""
        type="text"
        placeholder="John Doe"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={(e) => submit(e)}>Add user</button>
      <hr />
      <div className="container-user">
        <div className="box-users">
          <h2 className="mb-100">List of Users</h2>
          {props.userArray?.length > 0 ? (
            // lists the tasks in the application
            props.userArray.map((user, index) => (
              <div>
                <SingleUser
                  user={user}
                  index={index}
                  edit={props.edit}
                  delete={props.delete}
                />
              </div>
            ))
          ) : (
            <p>Nothing in the User List</p>
          )}
        </div>
        <div className="user-page">
          <img src="./assets/officework.png" />
        </div>
      </div>
    </div>
  );
};
