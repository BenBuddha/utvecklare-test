const App = () => {
  // loads data from local storage with contingency override
  const loadFromLocalStorage = (variableName) => {
    const data = JSON.parse(window.localStorage.getItem(variableName)) || [];

    return data;
  };

  // stores data to the local storage
  const storeToLocalStorage = (variableName, variableValue) => {
    window.localStorage.setItem(variableName, JSON.stringify(variableValue));
  };

  // checks if localstorage, if so, saves sample data there
  if (loadFromLocalStorage("userArray").length === 0)
    storeToLocalStorage("userArray", [
      { username: "Agneta Fältskog", unassigned: false },
      { username: "Anni-Frid Lyngstad", unassigned: false },
      { username: "Björn Ulvaeus", unassigned: true },
      { username: "Benny Andersson", unassigned: true },
    ]);

  // checks if localstorage, if so, saves sample data there
  if (loadFromLocalStorage("taskArray").length === 0) {
    console.log("here");
    storeToLocalStorage("taskArray", [
      {
        title: "Task 1",
        desc: "Analyze the new requirements gathered from the customer.",
        username: "Agneta Fältskog",
      },
      {
        title: "Task 2",
        desc: "Arrange a web meeting with the customer to get new requirements.",
        username: "Anni-Frid Lyngstad",
      },
    ]);
  }

  // applications source of truth for tasks. loads data from locastorage
  const [taskArray, setTaskArray] = React.useState(() =>
    loadFromLocalStorage("taskArray")
  );

  // applicatioin's source of truth for users. laods data from locastorage
  const [userArray, setUserArray] = React.useState(() =>
    loadFromLocalStorage("userArray")
  );

  // applicatioin's source of truth for current logical page.
  const [currentPage, setCurrentPage] = React.useState("Create Task");

  // this edits the task.
  const editTask = (index, title, desc) => {
    taskArray[index].title = title;
    taskArray[index].desc = desc;

    setTaskArray([...taskArray]);
    storeToLocalStorage("taskArray", [...taskArray]);
  };

  // this creates a new task.
  const createTask = (title, desc, username = "") => {
    const newtask = { title, desc, username };

    // find a the user with the given username.
    const assignedUserIndex = userArray.findIndex(
      (user) => user.username === username
    );

    // if finda the user, then makes the unassigned flag false.
    if (assignedUserIndex !== -1) {
      userArray[assignedUserIndex].unassigned = false;
      setUserArray(userArray);
      storeToLocalStorage("userArray", [...userArray]);
    }

    // saves the data to the localstoage and taskarray.
    setTaskArray([...taskArray, newtask]);
    storeToLocalStorage("taskArray", [...taskArray, newtask]);
  };

  // creates the new user in the application
  const createUser = (username) => {
    const newUser = { username, unassigned: true };
    setUserArray([...userArray, newUser]);
    storeToLocalStorage("userArray", [...userArray, newUser]);
  };

  // edit the new user in the application
  const editUser = (index, username) => {
    userArray[index].username = username;

    setUserArray([...userArray]);
    storeToLocalStorage("userArray", [...userArray]);
  };

  // deletes the task
  const deleteTask = (id) => {
    const deletedUser = taskArray[id];
    const newTaskArray = taskArray.filter((_, index) => id != index);

    // find a the user with the given username.
    const assginedUserIndex = userArray.findIndex(
      (user) => user.username === deletedUser.username
    );

    // if find the user, then makes the unassgined flag false.
    if (assginedUserIndex !== -1) {
      userArray[assginedUserIndex].unassigned = true;
      setUserArray(userArray);
      storeToLocalStorage("userArray", [...userArray]);
    }

    setTaskArray(newTaskArray);
    storeToLocalStorage("taskArray", newTaskArray);
  };

  // deletes the user with given id
  const deleteUser = (id) => {
    const newUserArray = userArray.filter((_, index) => id != index);

    setUserArray(newUserArray);
    storeToLocalStorage("userArray", newUserArray);
  };

  return (
    <div id="outer-container">
      {/* call to navbar, switches the logical pages */}
      <div id="sidebar">
        <Sidebar navigate={setCurrentPage} />
      </div>
      {/* renders the logical create task page */}
      <div id="content">
        <Navbar />
        <div className="container">
          {currentPage === "Create Task" && (
            <CreateTask
              create={createTask}
              delete={deleteTask}
              edit={editTask}
              taskArray={taskArray}
              userArray={userArray}
            />
          )}

          {/* renders the logical create user page */}
          {currentPage === "Create User" && (
            <CreateUser
              create={createUser}
              delete={deleteUser}
              edit={editUser}
              userArray={userArray}
            />
          )}

          {/* renders the logical listing page */}
          {currentPage === "List" && (
            <Unassigned taskArray={taskArray} userArray={userArray} />
          )}
        </div>
      </div>
    </div>
  );
};
