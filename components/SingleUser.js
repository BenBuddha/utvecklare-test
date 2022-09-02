const SingleUser = (props) => {
  // edit state view
  const [isEditView, setIsEditView] = React.useState(false);

  // username state in the function
  const [username, setusername] = React.useState("");

  // edit function
  const submit = async (e) => {
    e.preventDefault();
    setIsEditView(false);
    props.edit(props.index, username);
  };

  const readView = (
    <div className="user-list flex mb-30">
      <div className="user-name fs-500">
        <img src="./assets/avatar5.png" />
        {props.user.username}
      </div>
      <div className="user-items mt-30 ">
        <button onClick={() => setIsEditView(true)}>Edit</button>
        <button onClick={() => props.delete(props.index)}>Delete</button>
      </div>
    </div>
  );

  const editView = (
    <>
      <h2>Edit User</h2>
      <input
        id=""
        type="text"
        placeholder="Username"
        onChange={(e) => setusername(e.target.value)}
      />
      <button onClick={(e) => submit(e)}>Save</button>
      <button onClick={() => setIsEditView(false)}>Cancel</button>
    </>
  );

  return isEditView ? editView : readView;
};
