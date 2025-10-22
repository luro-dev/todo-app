export function Tabs(props) {
  const tabs = ["All", "Open", "Completed"];
  const { todos } = props;

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab == "All"
            ? todos.length
            : tab == "Open"
            ? todos.filter((todo) => !todo.complete).length
            : todos.filter((todo) => todo.complete).length;
        // Numbers for each type of task
        return (
          <button key={tabIndex} className="tab-button">
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
