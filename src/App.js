import MyCustomNavBar from "./Navbar/MyCustomNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContainer from "./MainContainer/MainContainer";
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <MyCustomNavBar />
        </li>
        <li>
          <MainContainer />
        </li>
      </ul>
    </div>
  );
}
export default App;
