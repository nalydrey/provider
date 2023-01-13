import './App.scss';
import Nav from './components/header/nav/Nav';
import Header from './components/header/head/Header';
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
