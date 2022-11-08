import './App.css';
import Footer from './components/Footer/Footer';
import TheHeader from './components/Header/TheHeader';
import Router from './Router';

const App = () => {
  return (
    <div className="App">
      <TheHeader />
      <Router />
      <div className="prefooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
