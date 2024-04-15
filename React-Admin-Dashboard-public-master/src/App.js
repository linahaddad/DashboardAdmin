import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import PageContent from "./components/PageContent";
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        <PageContent></PageContent>
      </div>

    </div>
  );
}

export default App;
