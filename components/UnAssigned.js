const Unassigned = (props) => {
  return (
    <>
      <h2>Unassigned Users</h2>
      <div className="border-b-2"> </div>
      <div className="wrapper">
        <div className="box">
          {/* maps all the unassigned users */}
          {props.userArray ? (
            props.userArray
              .filter((user) => user.unassigned)
              .map((task) => (
                <div className="mb-30 fs-500" id="username">
                  {task.username}
                </div>
              ))
          ) : (
            <p>There are no users with unassigned tasks</p>
          )}
        </div>

        <div>
          <img src="./assets/stayathome.png" />
        </div>
      </div>
    </>
  );
};
