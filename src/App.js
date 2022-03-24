import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
