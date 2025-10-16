import Page1 from './Pages/Page1';
import './App.css';
import Intro from './Pages/Intro';
import Overview from './Pages/Overview';
import Objectives from './Pages/Objectives';

function App() {
  return (
    <div className="App">
      <Page1 />
      <Intro />
      <Overview />
      <Objectives />
    </div>
  );
}

export default App;
