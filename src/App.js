import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";
import Content from "./components/Content";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <Content />
      </div>
      <BottomBar />
    </>
  );
}

export default App;
