import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div id="bg" className="h-full w-full absolute"></div>
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
