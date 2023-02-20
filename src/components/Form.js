import React, { useState } from 'react';
import timezones from './timezones';
import { nanoid } from 'nanoid';
import createClock from '../scripts/createClock';

function Form() {
  const [value, setValue] = useState('');

  const selectHandler = (evt => {
    evt.preventDefault();
    setValue(evt.target.value)
  });
  const submitHandler = (evt => createClock(value));
  const makeItems = () => timezones.map((tz) => { return <option key={nanoid()} name={`${tz.name}`}>{tz.name}</option>});

  return (
    <form className="Form">
      <div className="FormCol">
        <label htmlFor="name">Название</label>
        <input name="name" type="text" plaseholder="Введите название"></input>
      </div>
      <div className="FormCol">
        <label htmlFor="timezone">временная зона</label>
        <select onChange={selectHandler}>
          { makeItems() }
        </select>
      </div>
      <button className="FormButton"
        type="submit"
        onSubmit={submitHandler}>Добавить</button>
    </form>
  );
}

export default Form;