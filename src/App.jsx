import "./App.css";
import Content from "./Layout/Content/Content";
import Sidebar from "./Layout/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
