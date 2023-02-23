import './App.css';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [clocks, setClocks] = useState([]);
  const ClockTable = ({ children }) => <div className='ClockTable'>{children}</div>;
  const changeState = (newClocks) => setClocks(newClocks);
  return (
    <div className="App">
      <Form changeState={ changeState }/>
      <ClockTable children={clocks} />
    </div>
  );
}

export default App;
