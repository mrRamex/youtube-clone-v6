import './App.css';
import Header from './Components/Header/Header'
import Header2 from './Components/Header2/Header2'
import Sidebar from './Components/Sidebar/Sidebar';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Header2/>
      <Sidebar/>
      <MainPage/>
    </div>
  );
}

export default App;
