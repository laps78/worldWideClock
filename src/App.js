import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Clocks from './components/Clocks.js';

function App() {
  const [clocks, setClocks] = useState([]);
  const ClockTable = ({ children }) => <div className='ClockTable'>{children}</div>;
  const changeState = (newClocks) => setClocks(prevClocks => ([...prevClocks, newClocks]));
  const deleteClocks = (id) => setClocks(prevClocks => prevClocks.filter(clock => clock.id !== id));
  const clockGenerator = () => 
    clocks.map(clocksItem => (
      <Clocks
        key={clocksItem.id}
        id={clocksItem.id}
        name={clocksItem.name}
        timezone={clocksItem.timezone}
        deleteClocks={deleteClocks}
      ></Clocks>
    ));

  return (
    <div className="App">
      <Form changeState={ changeState }/>
      <ClockTable children={clockGenerator()} />
    </div>
  );
}

export default App;

