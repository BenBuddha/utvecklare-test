const CreateTask = (props) => {
  const [title, settitle] = React.useState("");
  const [desc, setdesc] = React.useState("");
  const [username, setusername] = React.useState("");

  // submit function, stops the default behaviour and runs the create function
  const submit = async (e) => {
    e.preventDefault();
    props.create(title, desc, username);
  };

  return (
    <div className="wrapper-task">
      <h2>Create Task</h2>
      <input
        id=""
        type="text"
        placeholder="Title"
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        id=""
        type="textarea"
        placeholder="Description"
        onChange={(e) => setdesc(e.target.value)}
      />
      <select onChange={(e) => setusername(e.target.value)}>
        <option value="" disabled selected hidden>
          Assign to
        </option>
        {props.userArray &&
          props.userArray.map((user) => (
            <option value={user.username}>{user.username}</option>
          ))}
      </select>
      <button onClick={(e) => submit(e)}>Add Task</button>
      <hr />
      <h2 className="mt-100">Tasks</h2>
      <div className="tasks-container">
        {props.taskArray?.length > 0 ? (
          // lists the tasks in the application
          props.taskArray.map((task, index) => (
            <SingleTask
              task={task}
              index={index}
              edit={props.edit}
              delete={props.delete}
            />
          ))
        ) : (
          <p>Nothing in the Task List</p>
        )}
      </div>
    </div>
  );
};
