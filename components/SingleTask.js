const SingleTask = (props) => {
  const [isEditView, setIsEditView] = React.useState(false);

  const [title, settitle] = React.useState("");
  const [desc, setdesc] = React.useState("");

  const submit = async (e) => {
    e.preventDefault();
    setIsEditView(false);
    props.edit(props.index, title, desc);
  };

  // if editing is not being done
  const readView = (
    <div className="box-tasks">
      <div className="task-title border-b-2">
        <h3>{props.task.title}</h3>
      </div>
      <div className="task-desc mt-100 mb-30">
        {" "}
        Description:
        <p>{props.task.desc}</p>
      </div>
      <div className="task-assigned">
        Assigned to:
        <p>{props.task.username}</p>
      </div>
      <div className="task-buttons">
        <button onClick={() => setIsEditView(true)}>Edit</button>
        <button onClick={() => props.delete(props.index)}>Delete</button>
      </div>
    </div>
  );

  // if editing is being done
  const editView = (
    <>
      <h2>Edit Task</h2>
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
      <button onClick={(e) => submit(e)}>Save</button>
      <button onClick={() => setIsEditView(false)}>Cancel</button>
    </>
  );

  // checks if editing is being done, if so, shows the appropriate views
  return isEditView ? editView : readView;
};
