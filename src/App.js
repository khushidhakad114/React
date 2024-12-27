import './App.css';

import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App flex">
        <div>hi</div>
        <div>
           <FirstComponent />
        </div>
    </div>
  );
}

export default App;