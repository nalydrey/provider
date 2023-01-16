import './App.scss';
import Nav from './components/header/nav/Nav';
import Header from './components/header/head/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Main/>
      <Footer/> 
    </div>
  );
}

export default App;
