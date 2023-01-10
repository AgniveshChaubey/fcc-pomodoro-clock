import './App.css';
import BreakTime from './components/BreakTime';
import DisplayTime from './components/DisplayTime';
import SessionTime from './components/SessionTime';

function App() {
  return (
    <div className="App">
      <DisplayTime />
      <SessionTime />
      <BreakTime />
    </div>
  );
}

export default App;
