function Sidebar(props) {
  return (
    <div className="sidebar" style={{ height: "100%" }}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src="./assets/icons8-menu-24.png" alt="" />
        </div>
        <h1 className="side-logo-text">LOGO</h1>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-items">
          <div className="item" onClick={() => props.navigate("Create Task")}>
            <div>
              <img
                src="./assets/icons8-icons8-24.png"
                className="sidebar-icon"
              />
            </div>
            <div className="sidebar-text">Tasks</div>
          </div>
        </li>
        <li className="sidebar-items">
          <div className="item" onClick={() => props.navigate("Create User")}>
            <div>
              <img
                src="./assets/icons8-contacts-24.png"
                className="sidebar-icon"
              />
            </div>
            <div className="sidebar-text">Users</div>
          </div>
        </li>
        <li className="sidebar-items">
          <div className="item" onClick={() => props.navigate("List")}>
            <div>
              <img src="./assets/icons8-box-24.png" className="sidebar-icon" />
            </div>
            <div className="sidebar-text">Unassigned</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
